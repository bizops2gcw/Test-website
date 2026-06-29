import { FileCheck2 } from "lucide-react";
import SectionHeading from "../SectionHeading";
import type { DeliverablesSection } from "../../section-types";

export default function Deliverables({ data }: { data: DeliverablesSection }) {
  return (
    <section className="section-pad bg-wtp-soft">
      <div className="container-wtp">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          intro={data.intro}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-wtp-light bg-white p-5"
            >
              <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-wtp-red" />
              <span className="text-[15px] font-medium text-wtp-navy">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
