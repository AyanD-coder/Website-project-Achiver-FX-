export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-8 flex flex-col items-center justify-center bg-zinc-900/30">
      <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input 
          type="email" 
          placeholder="Your Email" 
          className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors text-white"
        />
        <textarea 
          placeholder="Your Message" 
          rows={4}
          className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors text-white"
        ></textarea>
        <button type="submit" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
          Send Message
        </button>
      </form>
    </section>
  );
}
