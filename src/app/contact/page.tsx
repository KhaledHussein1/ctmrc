// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12 text-white">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-300">
          Have a question or just want to connect? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <form className="bg-[#111] border border-white/10 rounded-xl p-6 space-y-4 shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c7c54]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c7c54]"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c7c54]"
        />
        <button
            type="submit"
            className="bg-[#1c7c54] text-white px-6 py-3 rounded-full font-medium hover:bg-[#146943] transition w-full sm:max-w-[200px] mx-auto block"
            >
            Send Message
        </button>
      </form>

      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Do I have to be Muslim to join?',
              a: "No! Our community is open to everyone who shares a love for running and respects our values.",
            },
            {
              q: 'Where and when do you meet?',
              a: 'We usually meet at local parks or trails in Connecticut every weekend. Times and locations vary—check our Instagram or email updates.',
            },
            {
              q: 'Is this club beginner-friendly?',
              a: 'Absolutely! Whether you’re a first-time runner or training for your 10th marathon, you’re welcome here.',
            },
            {
              q: 'How can I stay updated on events?',
              a: 'Subscribe via the homepage, follow us on Instagram, or join our email newsletter to stay in the loop.',
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              className="bg-[#111] p-4 rounded-lg border border-white/10 shadow-sm"
            >
              <h3 className="font-semibold text-lg text-white">{q}</h3>
              <p className="text-gray-300 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
