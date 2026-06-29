import type { PageData } from "../section-types";
import SectionRenderer from "./SectionRenderer";

export default function PageRenderer({ page }: { page: PageData }) {
  return (
    <>
      {page.sections.map((section, i) => (
        <SectionRenderer key={`${section.type}-${i}`} section={section} />
      ))}
    </>
  );
}
