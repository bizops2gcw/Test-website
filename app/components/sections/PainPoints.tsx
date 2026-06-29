import { AlertTriangle } from "lucide-react";
import SectionHeading from "../SectionHeading";
import type { PainPointsSection } from "../../section-types";

export default function PainPoints({ data }: { data: PainPointsSection }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-wtp">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          intro={data.intro}
          center
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-wtp-light bg-wtp-soft/60 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-wtp-red-tint">
                <AlertTriangle className="h-5 w-5 text-wtp-red" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-wtp-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-wtp-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
