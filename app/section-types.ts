/** Kiểu dữ liệu cho hệ thống render trang theo JSON (app/_data/pages/*.json) */

export interface CTA {
  label: string;
  href: string;
}

export interface HeroSection {
  type: "hero";
  variant?: "home" | "page";
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  highlights?: string[];
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface StatsSection {
  type: "stats";
  variant?: "light" | "dark";
  title?: string;
  items: { value: string; label: string }[];
}

export interface PainPointsSection {
  type: "pain-points";
  eyebrow?: string;
  title: string;
  intro?: string;
  items: { title: string; description: string }[];
}

export interface ServicesGridSection {
  type: "services-grid";
  eyebrow?: string;
  title: string;
  intro?: string;
}

export interface FeatureListSection {
  type: "feature-list";
  eyebrow?: string;
  title: string;
  intro?: string;
  columns?: 2 | 3;
  items: { title: string; description: string; icon?: string }[];
}

export interface ProcessSection {
  type: "process";
  eyebrow?: string;
  title: string;
  intro?: string;
  steps: { title: string; description: string }[];
}

export interface PackagesSection {
  type: "packages";
  eyebrow?: string;
  title: string;
  intro?: string;
  note?: string;
}

export interface PricingTableSection {
  type: "pricing-table";
  title: string;
  intro?: string;
  note?: string;
}

export interface PackageMatrixSection {
  type: "package-matrix";
  eyebrow?: string;
  title: string;
  intro?: string;
  rows: { feature: string; safe: boolean; growth: boolean; scale: boolean }[];
}

export interface DeliverablesSection {
  type: "deliverables";
  eyebrow?: string;
  title: string;
  intro?: string;
  items: string[];
}

export interface TestimonialsSection {
  type: "testimonials";
  eyebrow?: string;
  title: string;
  items: { quote: string; author: string; role: string }[];
}

export interface FaqSection {
  type: "faq";
  eyebrow?: string;
  title: string;
  items: { q: string; a: string }[];
}

export interface RichTextSection {
  type: "rich-text";
  eyebrow?: string;
  title?: string;
  body: string[];
}

export interface CtaSection {
  type: "cta";
  title: string;
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface ContactSection {
  type: "contact";
  title?: string;
  intro?: string;
}

export type Section =
  | HeroSection
  | StatsSection
  | PainPointsSection
  | ServicesGridSection
  | FeatureListSection
  | ProcessSection
  | PackagesSection
  | PricingTableSection
  | PackageMatrixSection
  | DeliverablesSection
  | TestimonialsSection
  | FaqSection
  | RichTextSection
  | CtaSection
  | ContactSection;

export interface PageData {
  title: string;
  metaDescription: string;
  sections: Section[];
}

/** Bài viết kiến thức (app/_data/posts/*.json) — dùng cho /kien-thuc. */
export interface PostData {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  date: string;
  excerpt: string;
  relatedService?: string;
  body: string[];
}
