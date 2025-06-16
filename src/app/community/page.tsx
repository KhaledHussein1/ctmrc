// app/community/page.tsx

export default function CommunityPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto text-white space-y-16">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        Our Community
      </h1>

      {/* Split Section: Image + Text */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
        {/* Image */}
        <div className="md:flex-1 flex justify-center md:justify-start order-1 md:order-none">
          <img
            src="/community-run.jpg"
            alt="Muslim Runners Community Gathering"
            className="rounded-2xl shadow-2xl max-w-[600px] w-full h-auto object-contain max-h-[450px]"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="md:flex-1 space-y-6 max-w-xl order-2 md:order-none">
          <p className="text-gray-300 text-lg leading-relaxed">
            At the heart of Muslim Runners of Connecticut is a diverse and vibrant community. Whether you’re a casual jogger or marathon runner, here you’ll find encouragement, friendship, and shared values of faith and fitness.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our community members come from all walks of life and support each other through every step—celebrating milestones, staying motivated, and inspiring healthy living.
          </p>
          <blockquote className="italic text-[#1c7c54] font-semibold border-l-4 border-[#1c7c54] pl-4">
            “We live in a world in which we need to share responsibility. It’s easy to say ‘It’s not my child, not my community, not my world, not my problem.’ Then there are those who see the need and respond.”<br />— Fred Rogers
          </blockquote>
        </div>
      </section>

      {/* Get Involved */}
      <section className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center mb-6 tracking-wide">
          Get Involved
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg leading-relaxed">
          <li>Join our weekly runs at beautiful local parks and trails across Connecticut.</li>
          <li>Participate in special events including charity runs, Ramadan runs, and social meetups.</li>
          <li>Follow us on Instagram for the latest updates and motivational stories.</li>
          <li>Subscribe to our newsletter to stay connected with upcoming events and news.</li>
        </ul>
      </section>
    </div>
  );
}
