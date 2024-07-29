import { Hero } from "../components/Hero";
import { LogoSection } from "../components/LogoSection";
import { PrayerSection } from "../components/PrayerSection";
import { AudienceSection } from "../components/AudienceSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";

export default function Page() {
  return (
    <>
      <Hero />
      <LogoSection />
      <PrayerSection />
      <AudienceSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
