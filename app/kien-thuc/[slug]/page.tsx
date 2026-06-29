import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { loadPost, getAllPosts } from "../../lib/posts";
import { SERVICES, SITE } from "../../site.config";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = loadPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: { title: post.title, description: post.metaDescription },
    alternates: { canonical: `/kien-thuc/${post.slug}` },
  };
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = loadPost(slug);
  if (!post) notFound();

  const relatedService = SERVICES.find((s) => s.slug === post.relatedService);

  return (
    <article className="section-pad bg-white">
      <div className="container-wtp max-w-3xl">
        <Link
          href="/kien-thuc"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-wtp-mid hover:text-wtp-red transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Tất cả bài viết
        </Link>

        <p className="mt-6 text-sm font-bold uppercase tracking-wide text-wtp-red">
          {post.category}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-wtp-navy sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-1.5 text-sm text-wtp-mid">
          <Calendar className="h-4 w-4" /> {formatDate(post.date)}
        </div>

        <div className="mt-8 space-y-5">
          {post.body.map((p, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-wtp-text">
              {p}
            </p>
          ))}
        </div>

        {relatedService && (
          <div className="mt-12 rounded-xl border border-wtp-light bg-wtp-soft p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-wtp-red">
              Dịch vụ liên quan
            </p>
            <h2 className="mt-2 text-xl font-bold text-wtp-navy">
              {relatedService.label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-wtp-text">
              {relatedService.short}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={relatedService.href}
                className="inline-flex items-center gap-2 rounded-lg bg-wtp-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-wtp-red-dark transition-colors"
              >
                Xem chi tiết dịch vụ <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={SITE.bookingHref}
                className="inline-flex items-center gap-2 rounded-lg border border-wtp-navy px-5 py-2.5 text-sm font-semibold text-wtp-navy hover:bg-white transition-colors"
              >
                Đặt lịch tư vấn miễn phí
              </Link>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
