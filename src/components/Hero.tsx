export default function Hero() {
  return (
    <section className="w-full py-32 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
        Welcome to Our Platform
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl text-center mb-10">
        We provide the best solutions to help your business grow and achieve its goals efficiently and effectively. Join us today to make a difference.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
          Get Started
        </button>
        <button className="px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}
