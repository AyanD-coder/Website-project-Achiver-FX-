export default function Testimonials() {
  return (
    <section className="w-full py-20 px-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-12 text-white">What Our Clients Say</h2>
      <div className="max-w-3xl border border-zinc-800 p-8 rounded-2xl bg-zinc-900/50 text-center">
        <p className="text-xl italic text-zinc-300 mb-6">
          &quot;This platform completely transformed the way we operate. The efficiency and reliability are unmatched!&quot;
        </p>
        <div className="font-semibold text-white">— Jane Doe, CEO of TechCorp</div>
      </div>
    </section>
  );
}
