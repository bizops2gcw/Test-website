import SectionHeading from "../SectionHeading";
import { PRICING } from "../../data/packages";
import type { PricingTableSection } from "../../section-types";

export default function PricingTable({ data }: { data: PricingTableSection }) {
  return (
    <section className="section-pad bg-wtp-soft">
      <div className="container-wtp">
        <SectionHeading
          eyebrow="Khung giá theo ngành"
          title={data.title}
          intro={data.intro}
          center
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-xl bg-white text-sm shadow-sm">
            <thead>
              <tr className="bg-wtp-navy text-white">
                <th className="p-4 text-left font-bold">Ngành</th>
                <th className="p-4 text-center font-bold">⭐ Safe Start</th>
                <th className="p-4 text-center font-bold">🚀 Growth Engine</th>
                <th className="p-4 text-center font-bold">🏆 Scale Up</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.sectors.map((s, i) => (
                <tr
                  key={s.name}
                  className={i % 2 === 1 ? "bg-wtp-soft/60" : "bg-white"}
                >
                  <td className="p-4 font-semibold text-wtp-navy">{s.name}</td>
                  <td className="p-4 text-center text-wtp-text">{s.safe}</td>
                  <td className="p-4 text-center font-semibold text-wtp-navy">
                    {s.growth}
                  </td>
                  <td className="p-4 text-center text-wtp-text">{s.scale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-wtp-mid">
          {data.note ?? PRICING.note}
        </p>
      </div>
    </section>
  );
}
