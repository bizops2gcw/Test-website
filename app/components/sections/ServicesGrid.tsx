import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import { SERVICES } from "../../site.config";
import type { ServicesGridSection } from "../../section-types";

export default function ServicesGrid({ data }: { data: ServicesGridSection }) {
  return (
    <section className="section-pad bg-wtp-soft">
      <div className="container-wtp">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          intro={data.intro}
          center
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-xl border border-wtp-light bg-white p-6 transition-all hover:-translate-y-1 hover:border-wtp-red/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-wtp-blue-tint text-wtp-blue transition-colors group-hover:bg-wtp-red group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-wtp-navy">{s.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-wtp-text">
                {s.short}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-wtp-red">
                Tìm hiểu chi tiết
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
