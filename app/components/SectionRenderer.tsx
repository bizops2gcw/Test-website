import type { Section } from "../section-types";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import PainPoints from "./sections/PainPoints";
import ServicesGrid from "./sections/ServicesGrid";
import FeatureList from "./sections/FeatureList";
import Process from "./sections/Process";
import Packages from "./sections/Packages";
import PricingTable from "./sections/PricingTable";
import PackageMatrix from "./sections/PackageMatrix";
import Deliverables from "./sections/Deliverables";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import RichText from "./sections/RichText";
import Cta from "./sections/Cta";
import ContactForm from "./sections/ContactForm";

export default function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "hero":
      return <Hero data={section} />;
    case "stats":
      return <Stats data={section} />;
    case "pain-points":
      return <PainPoints data={section} />;
    case "services-grid":
      return <ServicesGrid data={section} />;
    case "feature-list":
      return <FeatureList data={section} />;
    case "process":
      return <Process data={section} />;
    case "packages":
      return <Packages data={section} />;
    case "pricing-table":
      return <PricingTable data={section} />;
    case "package-matrix":
      return <PackageMatrix data={section} />;
    case "deliverables":
      return <Deliverables data={section} />;
    case "testimonials":
      return <Testimonials data={section} />;
    case "faq":
      return <Faq data={section} />;
    case "rich-text":
      return <RichText data={section} />;
    case "cta":
      return <Cta data={section} />;
    case "contact":
      return <ContactForm data={section} />;
    default:
      return null;
  }
}
