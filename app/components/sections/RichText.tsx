import SectionHeading from "../SectionHeading";
import type { RichTextSection } from "../../section-types";

export default function RichText({ data }: { data: RichTextSection }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-wtp max-w-3xl">
        {data.title && (
          <SectionHeading eyebrow={data.eyebrow} title={data.title} />
        )}
        <div className={`${data.title ? "mt-6" : ""} space-y-4`}>
          {data.body.map((p, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-wtp-text">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
