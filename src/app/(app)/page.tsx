import { Hero } from "../components/Hero";
import { LogoSection } from "../components/LogoSection";
import { PrayerSection } from "../components/PrayerSection";
import { AudienceSection } from "../components/AudienceSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { QuoteSection } from "../components/QuoteSection";
import { InviteSection } from "../components/InviteSection";

export default function Page() {
  return (
    <>
      <Hero />
      <LogoSection />
      <PrayerSection />
      <QuoteSection />
      <AudienceSection />
      <InviteSection />
      <FAQSection />
      <QuoteSection />
      <ContactSection />
    </>
  );
}
