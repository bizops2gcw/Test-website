"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { NAV, SERVICES, SITE } from "../site.config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-wtp-light">
      {/* Top utility bar */}
      <div className="hidden md:block bg-wtp-navy text-wtp-light">
        <div className="container-wtp flex items-center justify-between py-1.5 text-xs">
          <span>{SITE.slogan}</span>
          <div className="flex items-center gap-4">
            <a href={SITE.emailHref} className="hover:text-white transition-colors">
              {SITE.email}
            </a>
            <a
              href={SITE.hotlineHref}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-wtp-red transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> {SITE.hotline}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wtp flex items-center justify-between py-3">
        <Link href="/" className="flex items-center" aria-label="WTP Advisory — Trang chủ">
          <Image
            src="/brand/wtp-logo-red.png"
            alt="WTP Advisory"
            width={146}
            height={86}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Điều hướng chính">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-wtp-red"
                      : "text-wtp-navy hover:text-wtp-red"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[640px]">
                    <div className="grid grid-cols-2 gap-1 rounded-xl border border-wtp-light bg-white p-3 shadow-xl">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="rounded-lg p-3 hover:bg-wtp-soft transition-colors"
                        >
                          <div className="text-sm font-semibold text-wtp-navy">
                            {s.label}
                          </div>
                          <div className="mt-0.5 text-xs text-wtp-mid leading-snug">
                            {s.short}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-wtp-red"
                    : "text-wtp-navy hover:text-wtp-red"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={SITE.bookingHref}
            className="inline-flex items-center gap-2 rounded-lg bg-wtp-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-wtp-red-dark transition-colors"
          >
            <Phone className="h-4 w-4" /> Đặt lịch tư vấn
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-wtp-navy"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-wtp-light bg-white" aria-label="Điều hướng di động">
          <div className="container-wtp py-3 flex flex-col">
            <Link href="/" onClick={() => setOpen(false)} className="py-2.5 font-semibold text-wtp-navy">
              Trang chủ
            </Link>
            <div className="py-2">
              <div className="text-xs font-bold uppercase tracking-wide text-wtp-mid">
                Dịch vụ
              </div>
              <div className="mt-1 flex flex-col">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="py-2 pl-3 text-sm text-wtp-text hover:text-wtp-red"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/bang-gia" onClick={() => setOpen(false)} className="py-2.5 font-semibold text-wtp-navy">
              Bảng giá
            </Link>
            <Link href="/kien-thuc" onClick={() => setOpen(false)} className="py-2.5 font-semibold text-wtp-navy">
              Kiến thức
            </Link>
            <Link href="/gioi-thieu" onClick={() => setOpen(false)} className="py-2.5 font-semibold text-wtp-navy">
              Giới thiệu
            </Link>
            <Link
              href={SITE.bookingHref}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-wtp-red px-5 py-3 font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Đặt lịch tư vấn
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
