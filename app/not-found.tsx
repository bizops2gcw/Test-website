import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { SERVICES } from "./site.config";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-wtp py-24 text-center">
        <p className="text-6xl font-extrabold text-wtp-red">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-wtp-navy">
          Không tìm thấy trang
        </h1>
        <p className="mx-auto mt-3 max-w-md text-wtp-text">
          Trang Anh/Chị tìm có thể đã được di chuyển hoặc không tồn tại. Khám phá
          các dịch vụ của WTP Advisory bên dưới.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-wtp-red px-6 py-3 text-sm font-semibold text-white hover:bg-wtp-red-dark transition-colors"
        >
          <Home className="h-4 w-4" /> Về trang chủ
        </Link>
        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-center justify-between rounded-lg border border-wtp-light bg-wtp-soft px-4 py-3 text-left text-sm font-semibold text-wtp-navy hover:border-wtp-red/40"
            >
              {s.label}
              <ArrowRight className="h-4 w-4 text-wtp-red" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
