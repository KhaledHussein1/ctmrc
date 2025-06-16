'use client';

type SectionProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  image: string;
  imageLeft?: boolean;
};

export function Section({ title, description, cta, image, imageLeft = false }: SectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-16 max-w-7xl mx-auto">
      <div className={`${imageLeft ? 'order-2 md:order-1' : 'order-1'}`}>
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-lg w-full max-w-xl md:max-w-2xl"
        />
      </div>
      <div className={`${imageLeft ? 'order-1 md:order-2' : 'order-2'}`}>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
        <a
          href={cta.href}
          className="inline-block bg-[#1c7c54] text-white px-6 py-3 rounded-full font-medium hover:bg-[#146943] transition"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
