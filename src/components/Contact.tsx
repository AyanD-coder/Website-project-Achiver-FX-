export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-8 flex flex-col items-center justify-center bg-zinc-900/30">
      <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input 
          id="contact-email"
          name="email"
          type="email" 
          suppressHydrationWarning
          placeholder="Your Email" 
          autoComplete="email"
          className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors text-white"
        />
        <textarea 
          id="contact-message"
          name="message"
          suppressHydrationWarning
          placeholder="Your Message" 
          autoComplete="off"
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
