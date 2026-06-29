import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { SERVICES, SITE } from "../site.config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-wtp-navy text-wtp-light">
      <div className="container-wtp py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Image
              src="/brand/wtp-logo-white.png"
              alt="WTP Advisory"
              width={150}
              height={89}
              className="h-11 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-wtp-light/80">
              {SITE.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-white">{SITE.slogan}</p>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Dịch vụ
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-wtp-light/80 hover:text-wtp-red transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Liên hệ
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-wtp-light/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wtp-red" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-wtp-red" />
                <a href={SITE.hotlineHref} className="hover:text-white transition-colors">
                  {SITE.hotline}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-wtp-red" />
                <a href={SITE.emailHref} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <Link
              href={SITE.bookingHref}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-wtp-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-wtp-red-dark transition-colors"
            >
              <Phone className="h-4 w-4" /> Đặt lịch tư vấn miễn phí
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wtp flex flex-col gap-2 py-5 text-xs text-wtp-light/60 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {SITE.name} · A member of WTP Group · Confidential
          </span>
          <span>
            Tư vấn đúng — Vận hành chuẩn — Tăng trưởng bền vững.
          </span>
        </div>
      </div>
    </footer>
  );
}
