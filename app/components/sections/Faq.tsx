import { Plus } from "lucide-react";
import SectionHeading from "../SectionHeading";
import type { FaqSection } from "../../section-types";

export default function Faq({ data }: { data: FaqSection }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="section-pad bg-wtp-soft">
      <div className="container-wtp max-w-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SectionHeading eyebrow={data.eyebrow} title={data.title} center />
        <div className="mt-10 space-y-3">
          {data.items.map((it) => (
            <details
              key={it.q}
              className="group rounded-xl border border-wtp-light bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-wtp-navy">
                {it.q}
                <Plus className="h-5 w-5 shrink-0 text-wtp-red transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-wtp-text">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
