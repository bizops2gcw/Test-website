import { Check, Minus } from "lucide-react";
import SectionHeading from "../SectionHeading";
import type { PackageMatrixSection } from "../../section-types";

function Cell({ on }: { on: boolean }) {
  return (
    <td className="p-4 text-center">
      {on ? (
        <Check className="mx-auto h-5 w-5 text-wtp-red" aria-label="Có" />
      ) : (
        <Minus className="mx-auto h-4 w-4 text-wtp-light" aria-label="Không" />
      )}
    </td>
  );
}

export default function PackageMatrix({ data }: { data: PackageMatrixSection }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-wtp">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          intro={data.intro}
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-xl border border-wtp-light text-sm">
            <thead>
              <tr className="bg-wtp-soft text-wtp-navy">
                <th className="p-4 text-left font-bold">Hạng mục</th>
                <th className="p-4 text-center font-bold">⭐ Safe Start</th>
                <th className="p-4 text-center font-bold">🚀 Growth Engine</th>
                <th className="p-4 text-center font-bold">🏆 Scale Up</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r) => (
                <tr key={r.feature} className="border-t border-wtp-light">
                  <td className="p-4 font-medium text-wtp-text">{r.feature}</td>
                  <Cell on={r.safe} />
                  <Cell on={r.growth} />
                  <Cell on={r.scale} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
