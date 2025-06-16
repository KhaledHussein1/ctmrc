export default function EventsSection() {
  return (
    <section className="w-full mt-0 mb-16 px-6 md:px-12 lg:px-20 py-8 rounded-2xl bg-gradient-to-r from-[#1c7c54]/10 to-[#146943]/10 shadow-lg">

      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-6 text-[#1c7c54] tracking-wide max-w-5xl mx-auto">
        Upcoming Event
      </h2>

      {/* Content Flex */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        {/* Left: Text */}
        <div className="md:flex-1 space-y-4">
          <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            <span className="font-semibold text-[#1c7c54]">2025 CTMRC 5K RUN/WALK FOR PALESTINE</span><br />
            August 31, 2025<br />
            Seaside Park, 1 Barnum Dyke, Bridgeport, CT 06604
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            CTMRC’s First Annual 5k Run/Walk - Join us in making every step count for Palestine.
          </p>
          <a
            href="https://www.movemint.cc/events/ctmrc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1c7c54] hover:bg-[#146943] text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Learn More & Register
          </a>
        </div>

        {/* Right: Banner Image */}
        <div className="md:flex-1 flex justify-center">
          <img
            src="/5k-run.png"
            alt="2025 CTMRC 5K Run/Walk for Palestine Banner"
            className="w-full max-w-[500px] h-auto object-contain rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
