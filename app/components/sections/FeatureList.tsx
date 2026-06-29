import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import type { FeatureListSection } from "../../section-types";

export default function FeatureList({ data }: { data: FeatureListSection }) {
  const cols =
    data.columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="section-pad bg-white">
      <div className="container-wtp">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          intro={data.intro}
        />
        <div className={`mt-12 grid gap-6 ${cols}`}>
          {data.items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-wtp-blue-tint text-wtp-blue">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-wtp-navy">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-wtp-text">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
