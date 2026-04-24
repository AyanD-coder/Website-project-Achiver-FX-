export default function Stats() {
  return (
    <section className="w-full py-16 px-8 flex flex-col md:flex-row items-center justify-center gap-16 text-center border-y border-zinc-800">
      <div>
        <div className="text-4xl font-bold mb-2 text-white">10k+</div>
        <div className="text-sm text-zinc-400 uppercase tracking-wider">Active Users</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2 text-white">99%</div>
        <div className="text-sm text-zinc-400 uppercase tracking-wider">Satisfaction</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2 text-white">50+</div>
        <div className="text-sm text-zinc-400 uppercase tracking-wider">Integrations</div>
      </div>
    </section>
  );
}
