import { Hero } from "../components/Hero";
import { PrayerSection } from "../components/PrayerSection";
import { AudienceSection } from "../components/AudienceSection";
import { FAQSection } from "../components/FAQSection";

export default function Page() {
  return (
    <>
      <Hero />
      <PrayerSection />
      <AudienceSection />
      <FAQSection />
    </>
  );
}
