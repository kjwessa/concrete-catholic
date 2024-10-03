import { FAQSection } from '../../../components/FAQSection'
import { ContactSection } from '../../../components/ContactSection'

import { BeConcreteSection } from '../../../components/BeConcreteSection'
import { CoverSection } from '../../../components/CoverSection'

import { BioSection } from '../../../components/BioSection'
import { ListenNowSection } from '../../../components/ListenNowSection'

export default function Page() {
  return (
    <>
      <CoverSection />
      <BeConcreteSection />

      <BioSection />
      <ListenNowSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
