/**
 * Cấu hình toàn site WTP Advisory — nguồn dữ liệu duy nhất cho
 * thông tin công ty, menu điều hướng và danh mục 8 nhóm dịch vụ.
 * Sửa ở đây là cập nhật toàn bộ header / footer / sitemap.
 */

export const SITE = {
  name: "WTP Advisory",
  legalName: "WTP Advisory — A member of WTP Group",
  domain: "advisory.wtp.vn",
  url: "https://advisory.wtp.vn",
  slogan: "Tư vấn đúng — Vận hành chuẩn — Tăng trưởng bền vững.",
  description:
    "WTP Advisory — Đối tác tư vấn chiến lược & vận hành cho doanh nghiệp SME Việt Nam. Đồng hành cùng CEO chuẩn hóa quản trị, tăng trưởng có hệ thống và sẵn sàng gọi vốn – M&A.",
  hotline: "1900 9999",
  hotlineHref: "tel:19009999",
  email: "advisory@wtp.vn",
  emailHref: "mailto:advisory@wtp.vn",
  address: "Tầng 12, Tòa nhà WTP, Quận 1, TP. Hồ Chí Minh",
  bookingHref: "/lien-he",
} as const;

export interface ServiceLink {
  /** slug đầy đủ dùng cho href và tên file JSON dưới app/_data/pages/ */
  slug: string;
  href: string;
  label: string;
  short: string;
  icon: string; // tên icon lucide-react
}

/** 8 nhóm dịch vụ — khớp Scope of Work chính thức của WTP Advisory */
export const SERVICES: ServiceLink[] = [
  {
    slug: "dich-vu/chien-luoc-dieu-hanh",
    href: "/dich-vu/chien-luoc-dieu-hanh",
    label: "Chiến lược & Điều hành",
    short: "Chẩn đoán DN, kế hoạch 90 ngày, Fractional COO, CEO Office.",
    icon: "Compass",
  },
  {
    slug: "dich-vu/tai-chinh",
    href: "/dich-vu/tai-chinh",
    label: "Tài chính",
    short: "Dòng tiền, ngân sách, dashboard, dự báo & sẵn sàng gọi vốn.",
    icon: "LineChart",
  },
  {
    slug: "dich-vu/tu-van-thue",
    href: "/dich-vu/tu-van-thue",
    label: "Tư vấn Rủi ro Thuế",
    short: "Rà soát tuân thủ, tối ưu cấu trúc, chuyển giá, thuế M&A.",
    icon: "ShieldCheck",
  },
  {
    slug: "dich-vu/nhan-su",
    href: "/dich-vu/nhan-su",
    label: "Nhân sự",
    short: "Cơ cấu tổ chức, JD & KPI, đánh giá hiệu suất, kế thừa.",
    icon: "Users",
  },
  {
    slug: "dich-vu/van-hanh-cong-nghe",
    href: "/dich-vu/van-hanh-cong-nghe",
    label: "Vận hành & Công nghệ",
    short: "SOP, RACI, KPI vận hành, ERP/CRM & tự động hóa.",
    icon: "Settings",
  },
  {
    slug: "dich-vu/marketing-sales",
    href: "/dich-vu/marketing-sales",
    label: "Marketing & Bán hàng",
    short: "Mô hình kinh doanh, phễu bán hàng, AI Marketing, tăng doanh thu.",
    icon: "TrendingUp",
  },
  {
    slug: "dich-vu/ma-goi-von",
    href: "/dich-vu/ma-goi-von",
    label: "M&A & Gọi vốn",
    short: "Định giá, data room, sẵn sàng đầu tư, hỗ trợ nhà đầu tư.",
    icon: "Handshake",
  },
  {
    slug: "dich-vu/bfo-thue-ngoai",
    href: "/dich-vu/bfo-thue-ngoai",
    label: "BFO — Quản trị Thuê ngoài",
    short: "Kế toán–thuế, HR, AI Marketing, ISO, ERP thuê ngoài tối ưu.",
    icon: "Network",
  },
];

export interface NavItem {
  label: string;
  href: string;
  children?: ServiceLink[];
}

export const NAV: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Dịch vụ", href: "/dich-vu", children: SERVICES },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Kiến thức", href: "/kien-thuc" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];
