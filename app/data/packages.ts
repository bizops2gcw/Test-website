/**
 * 3 gói dịch vụ & khung giá — trích Scope of Work + Bảng giá đề xuất chính thức
 * của WTP Advisory. Dùng chung cho trang Bảng giá và các trang dịch vụ.
 */

export interface Package {
  id: "safe" | "growth" | "scale";
  name: string;
  emoji: string;
  objective: string;
  role: string;
  ceoSessions: string;
  cooDays: string;
  fit: string;
  popular: boolean;
  features: string[];
}

export const PACKAGES: Package[] = [
  {
    id: "safe",
    name: "Safe Start",
    emoji: "⭐",
    objective: "Chuẩn hóa nền tảng quản trị",
    role: "Cố vấn chiến lược (Strategic Advisor)",
    ceoSessions: "1 buổi/tháng",
    cooDays: "—",
    fit: "Doanh nghiệp mới bắt đầu chuẩn hóa (0–2 năm)",
    popular: false,
    features: [
      "Chẩn đoán doanh nghiệp toàn diện (Business Diagnostic)",
      "Phân tích điểm nghẽn tăng trưởng",
      "Kế hoạch hành động 90 ngày có KPI & người phụ trách",
      "Rà soát tuân thủ thuế (Tax Compliance Review)",
      "Thiết kế cơ cấu tổ chức, org chart, JD & KPI",
      "Tư vấn kế toán–thuế, HR, AI Marketing thuê ngoài (BFO)",
      "Báo cáo tư vấn hàng tháng",
    ],
  },
  {
    id: "growth",
    name: "Growth Engine",
    emoji: "🚀",
    objective: "Tăng trưởng có hệ thống",
    role: "Giám đốc điều hành bán thời gian (Fractional COO)",
    ceoSessions: "2 buổi/tháng",
    cooDays: "4 ngày/tháng",
    fit: "Doanh nghiệp đang tăng trưởng (2–5 năm)",
    popular: true,
    features: [
      "Toàn bộ hạng mục gói Safe Start",
      "WTP trực tiếp điều phối triển khai (Execution Coordination)",
      "Họp kinh doanh định kỳ MBR/QBR",
      "Quản trị tài chính: dòng tiền, ngân sách, dashboard, dự báo",
      "Tối ưu cấu trúc thuế & kiểm soát rủi ro chuyển giá",
      "Đánh giá hiệu suất & phát triển lãnh đạo cấp trung",
      "SOP, RACI, KPI vận hành, tư vấn ERP/CRM & tự động hóa",
      "Phễu bán hàng, hành trình khách hàng & khung AI Marketing",
    ],
  },
  {
    id: "scale",
    name: "Scale Up",
    emoji: "🏆",
    objective: "Sẵn sàng gọi vốn – M&A – Mở rộng",
    role: "Văn phòng CEO & Fractional COO",
    ceoSessions: "2 buổi/tháng",
    cooDays: "8 ngày/tháng",
    fit: "Doanh nghiệp sẵn sàng mở rộng (5+ năm / gọi vốn)",
    popular: false,
    features: [
      "Toàn bộ hạng mục gói Growth Engine",
      "Văn phòng CEO (CEO Office) & PMO quản lý dự án",
      "Chiến lược 3–5 năm (Strategic Roadmap)",
      "Thẩm định tài chính (DD) & sẵn sàng gọi vốn",
      "Lập kế hoạch thuế dài hạn & tư vấn thuế M&A",
      "Kế hoạch kế thừa (Succession Planning)",
      "Định giá doanh nghiệp, Data Room, hỗ trợ nhà đầu tư",
      "Hồ sơ đầu tư hoàn chỉnh: Pitch Deck, Financial Model, One-Pager",
    ],
  },
];

export interface PricingSector {
  name: string;
  safe: string;
  growth: string;
  scale: string;
}

export const PRICING: { note: string; sectors: PricingSector[] } = {
  note: "Đơn vị: VNĐ/tháng, chưa bao gồm VAT. Giá điều chỉnh theo quy mô và phạm vi công việc thực tế. Ưu đãi 5% khi ký hợp đồng 6 tháng, 10% khi ký 12 tháng.",
  sectors: [
    {
      name: "Dịch vụ / CNTT",
      safe: "8 – 15 triệu",
      growth: "25 – 50 triệu",
      scale: "50 – 100 triệu",
    },
    {
      name: "Thương mại",
      safe: "10 – 25 triệu",
      growth: "35 – 80 triệu",
      scale: "100 – 250 triệu",
    },
    {
      name: "Sản xuất",
      safe: "15 – 35 triệu",
      growth: "35 – 100 triệu",
      scale: "150 – 300 triệu",
    },
  ],
};
