// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">About Muslim Runners of Connecticut</h1>

      <section className="space-y-4">
        <p className="text-gray-300 text-lg leading-relaxed">
          Muslim Runners of Connecticut is more than just a running club — it’s a community where faith and fitness come together.
          Founded to encourage healthy living while fostering brotherhood and sisterhood, we welcome runners of all levels and backgrounds.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our mission is to provide a supportive environment where members can improve their physical health, deepen their spiritual connection,
          and build lasting friendships through shared experiences and regular runs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What We Believe In</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><strong>Community:</strong> Bringing people together in a welcoming, inclusive environment.</li>
          <li><strong>Health:</strong> Promoting physical and mental wellness through running and fitness.</li>
          <li><strong>Faith:</strong> Supporting one another in our spiritual journeys and values.</li>
          <li><strong>Growth:</strong> Encouraging personal improvement, both on and off the track.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Join Us</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Whether you’re a casual jogger or a marathon veteran, we welcome you to join our runs, events, and social gatherings.
          Stay connected by subscribing to our newsletter on the homepage, or follow us on Instagram for updates and inspiration.
        </p>
      </section>
    </div>
  );
}
