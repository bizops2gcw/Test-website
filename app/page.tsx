import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageRenderer from "./components/PageRenderer";
import { loadPage } from "./lib/pages";

export function generateMetadata(): Metadata {
  const page = loadPage("");
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: { title: page.title, description: page.metaDescription },
    alternates: { canonical: "/" },
  };
}

export default function HomePage() {
  const page = loadPage("");
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
