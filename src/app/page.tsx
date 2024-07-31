import { Hero } from "./components/Hero";
import { LogoSection } from "./components/LogoSection";
import { PrayerSection } from "./components/PrayerSection";
import { AudienceSection } from "./components/AudienceSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { QuoteSection } from "./components/QuoteSection";
import { InviteSection } from "./components/InviteSection";
import { BeConcreteSection } from "./components/BeConcreteSection";
import { CoverSection } from "./components/CoverSection";
import { SubscribeSection } from "@/components/SubscribeSection";
import { AboutJackSection } from "./components/AboutJackSection";
import { WhatIfSection } from "./components/WhatIfSection";
import { ListenNowSection } from "./components/ListenNowSection";

export default function Page() {
  return (
    <>
      <Hero />
      <LogoSection />
      <PrayerSection />
      <QuoteSection
        image="/images/atlanta-traffic-guy-1200.jpg"
        alt=""
        quoteAuthor="Pope Benedict XVI"
        quoteContent="Being Christian is not the result of an ethical choice or a lofty idea, but the encounter with an event, a person, which gives life a new horizon and a decisive direction."
        quoteSource="Deus Caritas Est"
      />
      <InviteSection />
      <AudienceSection />
      <SubscribeSection />
      <CoverSection />
      <BeConcreteSection />
      <QuoteSection
        image="/images/atlanta-traffic-guy-1200.jpg"
        alt=""
        quoteAuthor="Luigi Giussani"
        quoteContent="The truly interesting question for man is neither logic, a fascinating game, nor demonstration, an inviting curiosity. Rather, the intriguing problem for man is how to adhere to reality, to become aware of reality."
        quoteSource="The Religious Sense"
      />
      <AboutJackSection />
      <WhatIfSection />
      <ListenNowSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
