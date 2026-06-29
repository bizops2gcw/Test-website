import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageRenderer from "../components/PageRenderer";
import { loadPage, getAllSlugs } from "../lib/pages";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams(): { slug: string[] }[] {
  return getAllSlugs()
    .filter((s) => s !== "")
    .map((s) => ({ slug: s.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = loadPage(slug.join("/"));
  if (!page) return {};
  const canonical = `/${slug.join("/")}`;
  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: { title: page.title, description: page.metaDescription },
    alternates: { canonical },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = loadPage(slug.join("/"));
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
