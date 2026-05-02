# Daily Technical Analysis Reports

Add one `.json` file here for each daily report when WordPress is not being used.

The live website now checks WordPress first. If WordPress has posts in the
configured analysis category, those posts appear automatically on
`/discover/analysis-report`. These JSON files are the fallback source.

Recommended file name:

```txt
YYYY-MM-DD-technical-analysis.json
```

Daily workflow:

1. Duplicate the latest report file.
2. Rename it with today's date.
3. Update `slug`, `date`, `title`, `summary`, `outlook`, and `markets`.
4. Save and deploy the website.

The website automatically reads all `.json` files in this folder and shows them newest first on `/discover/analysis-report`.

## WordPress Publishing

Default WordPress source:

```txt
https://achieverfinancials.com/wp-json/wp/v2/posts?categories=269&_embed=wp:featuredmedia&per_page=20
```

Optional environment variables:

```txt
WORDPRESS_ANALYSIS_REPORTS_URL=
WORDPRESS_ANALYSIS_REPORTS_REVALIDATE_SECONDS=900
WORDPRESS_ANALYSIS_REPORTS_ENABLED=true
ANALYSIS_REPORTS_REVALIDATE_TOKEN=
```

To refresh immediately after publishing in WordPress, configure a WordPress
webhook to call:

```txt
https://your-next-site.com/api/revalidate-analysis-reports?token=YOUR_TOKEN
```
