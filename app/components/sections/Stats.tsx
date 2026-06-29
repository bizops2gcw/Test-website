import type { StatsSection } from "../../section-types";

export default function Stats({ data }: { data: StatsSection }) {
  const dark = data.variant === "dark";
  return (
    <section
      className={`${
        dark ? "bg-wtp-navy text-white" : "bg-wtp-soft"
      } border-y border-wtp-light/60`}
    >
      <div className="container-wtp py-12">
        {data.title && (
          <h2
            className={`mb-8 text-center text-2xl font-bold ${
              dark ? "!text-white" : ""
            }`}
          >
            {data.title}
          </h2>
        )}
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {data.items.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-4xl font-extrabold text-wtp-red sm:text-5xl">
                {s.value}
              </dd>
              <p
                className={`mt-2 text-sm font-medium ${
                  dark ? "text-wtp-light/80" : "text-wtp-text"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
