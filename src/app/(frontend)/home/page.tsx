import { AudienceSection } from '../../../components/AudienceSection'
import { FAQSection } from '../../../components/FAQSection'
import { ContactSection } from '../../../components/ContactSection'

import { InviteSection } from '../../../components/InviteSection'
import { BeConcreteSection } from '../../../components/BeConcreteSection'
import { CoverSection } from '../../../components/CoverSection'
import { SubscribeSection } from '../../../components/SubscribeSection'
import { BioSection } from '../../../components/BioSection'
import { WhatIfSection } from '../../../components/WhatIfSection'
import { ListenNowSection } from '../../../components/ListenNowSection'

export default function Page() {
  return (
    <>
      <InviteSection />
      <AudienceSection />
      <SubscribeSection />
      <CoverSection />
      <BeConcreteSection />

      <BioSection />
      <WhatIfSection />
      <ListenNowSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
