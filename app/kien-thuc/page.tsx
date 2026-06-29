import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllPosts } from "../lib/posts";
import SectionHeading from "../components/SectionHeading";
import { SITE } from "../site.config";

export const metadata: Metadata = {
  title: "Kiến thức Quản trị Doanh nghiệp",
  description:
    "Bài viết chuyên sâu về chiến lược, tài chính, thuế, nhân sự, vận hành, marketing và gọi vốn cho doanh nghiệp SME — từ đội ngũ WTP Advisory.",
  alternates: { canonical: "/kien-thuc" },
};

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export default function KienThucPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-wtp-navy section-pad">
        <div className="container-wtp">
          <p className="text-sm font-bold uppercase tracking-wide text-wtp-red">
            Kiến thức
          </p>
          <h1 className="mt-2 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            Góc nhìn quản trị cho CEO doanh nghiệp SME
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-wtp-light/85">
            Bài viết thực chiến từ đội ngũ {SITE.name} — chiến lược, tài
            chính, thuế, nhân sự, vận hành, marketing và gọi vốn — giúp CEO
            ra quyết định nhanh và đúng hơn.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wtp">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/kien-thuc/${post.slug}`}
                className="group flex flex-col rounded-xl border border-wtp-light bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-wtp-red">
                  {post.category}
                </span>
                <h2 className="mt-3 text-lg font-bold text-wtp-navy leading-snug group-hover:text-wtp-red transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-wtp-text">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-wtp-mid">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-wtp-red">
                    Đọc tiếp <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-wtp-soft">
        <div className="container-wtp">
          <SectionHeading
            center
            eyebrow="Bắt đầu từ đâu?"
            title="Áp dụng ngay vào doanh nghiệp của bạn"
            intro="Mỗi bài viết đều gắn với một nhóm dịch vụ cụ thể. Đặt lịch chẩn đoán miễn phí để WTP Advisory chỉ ra đúng việc cần ưu tiên cho doanh nghiệp của Anh/Chị."
          />
          <div className="mt-8 flex justify-center">
            <Link
              href={SITE.bookingHref}
              className="inline-flex items-center gap-2 rounded-lg bg-wtp-red px-6 py-3 text-sm font-semibold text-white hover:bg-wtp-red-dark transition-colors"
            >
              Đặt lịch tư vấn miễn phí <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
