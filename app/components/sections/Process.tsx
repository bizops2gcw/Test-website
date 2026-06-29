import SectionHeading from "../SectionHeading";
import type { ProcessSection } from "../../section-types";

export default function Process({ data }: { data: ProcessSection }) {
  return (
    <section className="section-pad bg-wtp-soft">
      <div className="container-wtp">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          intro={data.intro}
          center
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-xl border border-wtp-light bg-white p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wtp-navy text-lg font-extrabold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-bold text-wtp-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wtp-text">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
