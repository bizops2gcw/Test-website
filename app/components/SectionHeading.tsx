export default function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <p
          className={`text-sm font-bold uppercase tracking-wide ${
            dark ? "text-wtp-red" : "text-wtp-red"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 text-3xl font-extrabold sm:text-4xl ${
          dark ? "!text-white" : ""
        } accent-bar ${center ? "accent-bar-center" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-wtp-light/85" : "text-wtp-text"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
