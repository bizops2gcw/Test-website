import Link from "next/link";
import { Check, Star } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { PACKAGES } from "../../data/packages";
import { SITE } from "../../site.config";
import type { PackagesSection } from "../../section-types";

export default function Packages({ data }: { data: PackagesSection }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-wtp">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          intro={data.intro}
          center
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
                pkg.popular
                  ? "border-wtp-red shadow-xl lg:-mt-3 lg:mb-3"
                  : "border-wtp-light"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-wtp-red px-3 py-1 text-xs font-bold text-white">
                  <Star className="h-3.5 w-3.5 fill-white" /> Phổ biến nhất
                </span>
              )}
              <h3 className="text-xl font-extrabold text-wtp-navy">
                {pkg.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-wtp-red">
                {pkg.objective}
              </p>
              <dl className="mt-5 space-y-2 rounded-lg bg-wtp-soft p-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-wtp-mid">Vai trò WTP</dt>
                  <dd className="text-right font-semibold text-wtp-navy">
                    {pkg.role}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-wtp-mid">Cố vấn CEO</dt>
                  <dd className="font-semibold text-wtp-navy">
                    {pkg.ceoSessions}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-wtp-mid">Điều phối COO</dt>
                  <dd className="font-semibold text-wtp-navy">{pkg.cooDays}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs font-medium text-wtp-mid">{pkg.fit}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-wtp-red" />
                    <span className="text-wtp-text">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={SITE.bookingHref}
                className={`mt-7 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-wtp-red text-white hover:bg-wtp-red-dark"
                    : "border border-wtp-navy text-wtp-navy hover:bg-wtp-navy hover:text-white"
                }`}
              >
                Nhận tư vấn gói {pkg.name}
              </Link>
            </div>
          ))}
        </div>
        {data.note && (
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-wtp-mid">
            {data.note}
          </p>
        )}
      </div>
    </section>
  );
}
