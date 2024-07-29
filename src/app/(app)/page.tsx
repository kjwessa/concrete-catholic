import { Hero } from "../components/Hero";
import { LogoSection } from "../components/LogoSection";
import { PrayerSection } from "../components/PrayerSection";
import { AudienceSection } from "../components/AudienceSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { QuoteSection } from "../components/QuoteSection";
import { InviteSection } from "../components/InviteSection";
import { BeConcreteSection } from "../components/BeConcreteSection";
import { CoverSection } from "../components/CoverSection";
import { SubscribeSection } from "@/components/SubscribeSection";
import { AboutJackSection } from "../components/AboutJackSection";
import { WhatIfSection } from "../components/WhatIfSection";

export default function Page() {
  return (
    <>
      <Hero />
      <LogoSection />
      <PrayerSection />
      <QuoteSection />
      <InviteSection />
      <AudienceSection />
      <CoverSection />
      <BeConcreteSection />
      <QuoteSection />
      <AboutJackSection />
      <WhatIfSection />
      <FAQSection />
      <SubscribeSection />
      <ContactSection />
    </>
  );
}
