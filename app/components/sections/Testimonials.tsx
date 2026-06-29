import { Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";
import type { TestimonialsSection } from "../../section-types";

export default function Testimonials({ data }: { data: TestimonialsSection }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-wtp">
        <SectionHeading eyebrow={data.eyebrow} title={data.title} center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.items.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col rounded-2xl border border-wtp-light bg-wtp-soft/50 p-7"
            >
              <Quote className="h-8 w-8 text-wtp-red" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-wtp-text">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-wtp-light pt-4">
                <div className="font-bold text-wtp-navy">{t.author}</div>
                <div className="text-sm text-wtp-mid">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
