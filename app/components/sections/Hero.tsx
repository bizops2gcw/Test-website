import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import type { HeroSection } from "../../section-types";

export default function Hero({ data }: { data: HeroSection }) {
  const isHome = data.variant !== "page";

  return (
    <section
      className={`relative overflow-hidden ${
        isHome ? "bg-wtp-navy" : "bg-wtp-navy"
      } text-white`}
    >
      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 85% -10%, #e92429 0%, transparent 60%), radial-gradient(40rem 24rem at 0% 110%, #1c3a6e 0%, transparent 60%)",
        }}
      />
      <div className="container-wtp relative">
        <div
          className={`${
            isHome ? "py-20 sm:py-28" : "py-14 sm:py-20"
          } max-w-3xl fade-up`}
        >
          {data.eyebrow && (
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-wtp-light">
              {data.eyebrow}
            </p>
          )}
          <h1
            className={`mt-4 font-extrabold !text-white ${
              isHome
                ? "text-4xl leading-tight sm:text-5xl lg:text-6xl"
                : "text-3xl sm:text-4xl lg:text-5xl"
            }`}
          >
            {data.headline}
          </h1>
          {data.subheadline && (
            <p className="mt-5 text-lg leading-relaxed text-wtp-light/85 sm:text-xl">
              {data.subheadline}
            </p>
          )}

          {data.highlights && data.highlights.length > 0 && (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {data.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-wtp-light">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-wtp-red" />
                  <span className="text-[15px]">{h}</span>
                </li>
              ))}
            </ul>
          )}

          {(data.primaryCta || data.secondaryCta) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {data.secondaryCta.label} <ArrowRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
