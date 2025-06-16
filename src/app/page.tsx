// app/page.tsx
'use client';

// import { Hero } from '@/components/Hero';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { QuoteSection } from '../components/QuoteSection';
import GalleryCarousel from '../components/GalleryCarousel';
import EventsSection from '../components/EventsSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <EventsSection />
      <Section
        title="Run with Purpose, Together."
        description="Whether you're chasing a personal best or enjoying a peaceful jog at dawn, our club brings together Muslims across Connecticut who believe in strengthening both body and soul. We run in unity — driven by community, powered by faith."
        cta={{ label: "Join Our Community", href: "/community" }}
        image="/group-run.jpg"
        imageLeft
      />
      <Section
        title="Meet the Community"
        description="From early morning jogs to group 5Ks, our members bring energy, diversity, and a shared love for running and faith. It’s not just about the pace — it’s about the people you run beside. Come meet your new running family."
        cta={{ label: 'See the Vibes on Instagram', href: '/community' }}
        image="/community.jpg"
        imageLeft={false}
      />
      <GalleryCarousel />
      <QuoteSection />
    </main>
  );
}
