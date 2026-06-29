import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import type { CtaSection } from "../../section-types";

export default function Cta({ data }: { data: CtaSection }) {
  return (
    <section className="bg-white">
      <div className="container-wtp py-14">
        <div className="relative overflow-hidden rounded-3xl bg-wtp-navy px-8 py-14 text-center sm:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(40rem 20rem at 100% 0%, #e92429 0%, transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold !text-white sm:text-4xl">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="mt-4 text-lg text-wtp-light/85">{data.subtitle}</p>
            )}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {data.primaryCta && (
                <Link
                  href={data.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-wtp-red px-7 py-3.5 text-base font-semibold text-white hover:bg-wtp-red-dark transition-colors"
                >
                  <Phone className="h-5 w-5" /> {data.primaryCta.label}
                </Link>
              )}
              {data.secondaryCta && (
                <Link
                  href={data.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {data.secondaryCta.label} <ArrowRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
