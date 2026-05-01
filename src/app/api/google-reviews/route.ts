export const dynamic = "force-dynamic";

type GoogleReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
};

type PlaceDetailsResponse = {
  result?: {
    name?: string;
    rating?: number;
    reviews?: GoogleReview[];
    url?: string;
    user_ratings_total?: number;
  };
  status?: string;
  error_message?: string;
};

type FindPlaceResponse = {
  candidates?: Array<{
    place_id?: string;
  }>;
  status?: string;
  error_message?: string;
};

const GOOGLE_PLACE_QUERY =
  process.env.GOOGLE_PLACE_QUERY || "Achiever Financials Ltd";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Achiever+Financials+Ltd&rlz=1C1GCEA_enIN1131IN1131&ie=UTF-8&zx=1753376898860&no_sw_cr=1&lqi=ChdBY2hpZXZlciBGaW5hbmNpYWxzIEx0ZJIBDHN0b2NrX2Jyb2tlcqoBXwoNL2cvMTF4bDg0bDZmMwoNL2cvMTF4bnhsdjI0MxABMiAQASIc7f7UtIhSdfqtTUZU8bpJ5TsM_k7hQkoCgvDUdjIbEAIiF2FjaGlldmVyIGZpbmFuY2lhbHMgbHRk#lkt=LocalPoiReviews&lrd=&rlimm=2779300575038091867";

const buildUrl = (
  baseUrl: string,
  params: Record<string, string | number | boolean>,
) => {
  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  return url;
};

async function findPlaceId(apiKey: string) {
  const response = await fetch(
    buildUrl("https://maps.googleapis.com/maps/api/place/findplacefromtext/json", {
      fields: "place_id",
      input: GOOGLE_PLACE_QUERY,
      inputtype: "textquery",
      key: apiKey,
    }),
    { next: { revalidate: 60 * 60 * 24 } },
  );

  const data = (await response.json()) as FindPlaceResponse;

  if (data.status !== "OK") {
    throw new Error(data.error_message || `Google place lookup failed: ${data.status}`);
  }

  return data.candidates?.[0]?.place_id;
}

async function getPlaceDetails(apiKey: string, placeId: string) {
  const response = await fetch(
    buildUrl("https://maps.googleapis.com/maps/api/place/details/json", {
      fields: "name,rating,user_ratings_total,reviews,url",
      key: apiKey,
      place_id: placeId,
      reviews_no_translations: true,
      reviews_sort: "newest",
    }),
    { next: { revalidate: 60 * 60 * 6 } },
  );

  const data = (await response.json()) as PlaceDetailsResponse;

  if (data.status !== "OK") {
    throw new Error(data.error_message || `Google reviews lookup failed: ${data.status}`);
  }

  return data.result;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return Response.json({
      configured: false,
      error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_MAPS_API_KEY.",
      reviews: [],
      reviewsUrl: GOOGLE_REVIEWS_URL,
    });
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || (await findPlaceId(apiKey));

    if (!placeId) {
      return Response.json({
        configured: true,
        error: "Google could not find a matching place ID.",
        reviews: [],
        reviewsUrl: GOOGLE_REVIEWS_URL,
      });
    }

    const place = await getPlaceDetails(apiKey, placeId);
    const reviews =
      place?.reviews
        ?.filter((review) => review.author_name && review.text)
        .map((review) => ({
          avatar: review.profile_photo_url,
          name: review.author_name || "Google user",
          rating: Math.round(review.rating || 5),
          role: review.relative_time_description || "Google review",
          text: review.text || "",
        })) ?? [];

    return Response.json({
      configured: true,
      rating: place?.rating,
      reviews,
      reviewsUrl: place?.url || GOOGLE_REVIEWS_URL,
      totalReviews: place?.user_ratings_total,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to fetch Google reviews.";

    return Response.json({
      configured: true,
      error: message,
      reviews: [],
      reviewsUrl: GOOGLE_REVIEWS_URL,
    });
  }
}
