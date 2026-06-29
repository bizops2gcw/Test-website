# Website WTP Advisory — advisory.wtp.vn

Website B2B hoàn chỉnh cho WTP Advisory, xây trên **Next.js 15 + Tailwind CSS v4**.
Nội dung mỗi trang nằm trong file JSON (`app/_data/pages/`) — sửa nội dung **không cần biết code**.

---

## 🚀 Cách chạy website trên máy của bạn (5 bước)

> Cần cài **Node.js** bản 18.18 trở lên (tải tại https://nodejs.org — chọn bản "LTS").

1. **Giải nén** thư mục dự án (nếu đang ở dạng .zip).
2. Mở **Terminal / PowerShell / Command Prompt**, di chuyển vào thư mục dự án:
   ```bash
   cd "đường/dẫn/đến/wtp-advisory-web"
   ```
3. **Cài thư viện** (chỉ làm 1 lần đầu):
   ```bash
   npm install
   ```
   *(Nếu đã cài pnpm, có thể dùng `pnpm install` để nhanh hơn.)*
4. **Chạy bản xem thử**:
   ```bash
   npm run dev
   ```
5. Mở trình duyệt vào **http://localhost:3000** — website hiện ra ngay.

Để dừng: bấm `Ctrl + C` trong cửa sổ Terminal.

---

## 🌐 Khi muốn đưa lên Internet (deploy)

Cách đơn giản nhất là dùng **Vercel** (miễn phí cho dự án nhỏ):
1. Tạo tài khoản tại https://vercel.com
2. Đẩy thư mục này lên GitHub, hoặc kéo-thả thư mục vào Vercel.
3. Vercel tự nhận diện Next.js và build. Sau đó gắn tên miền `advisory.wtp.vn`.

Hoặc tự build trên máy chủ:
```bash
npm run build   # tạo bản tối ưu cho production
npm run start   # chạy bản production tại http://localhost:3000
```

---

## ✏️ Sửa nội dung (phần hay dùng nhất)

| Muốn sửa gì | Mở file nào |
|---|---|
| Nội dung **Trang chủ** | `app/_data/pages/home.json` |
| Một **trang dịch vụ** | `app/_data/pages/dich-vu/<tên-dịch-vụ>.json` |
| Trang **Giới thiệu / Bảng giá / Liên hệ** | `app/_data/pages/gioi-thieu.json`, `bang-gia.json`, `lien-he.json` |
| **Thông tin công ty** (hotline, email, địa chỉ, menu) | `app/site.config.ts` |
| Một **bài viết kiến thức** | `app/_data/posts/<tên-bài>.json` |
| **3 gói dịch vụ & khung giá** | `app/data/packages.ts` |
| **Màu sắc, font thương hiệu** | `app/globals.css` |

Sau khi sửa file và lưu lại (Ctrl+S), nếu đang chạy `npm run dev` thì web **tự cập nhật**.

> Lưu ý: mỗi trang phải có `title` và `metaDescription` riêng (không trùng nhau) để tốt cho SEO.

---

## 🗂️ Cấu trúc dự án

```
app/
  _data/pages/        ← NỘI DUNG từng trang (JSON) — sửa ở đây
  _data/posts/        ← NỘI DUNG bài viết Kiến thức (JSON) — thêm bài mới ở đây
  components/         ← Giao diện (header, footer, các khối section)
    sections/         ← 15 loại khối: hero, dịch vụ, bảng giá, FAQ, form...
  [...slug]/          ← Tự động render mọi trang từ file JSON
  kien-thuc/          ← Trang danh sách + chi tiết bài viết Kiến thức
  data/packages.ts    ← 3 gói dịch vụ + khung giá theo ngành
  site.config.ts      ← Thông tin công ty + menu + 8 nhóm dịch vụ
  lib/pages.ts        ← Đọc file JSON trang
  lib/posts.ts        ← Đọc file JSON bài viết
  sitemap.ts          ← Tự sinh sitemap cho Google (gồm cả bài viết)
  robots.ts           ← Cho phép Google lập chỉ mục
  layout.tsx          ← Khung chung + font + SEO + dữ liệu có cấu trúc
  globals.css         ← Hệ màu & font thương hiệu WTP
middleware.ts         ← Chuyển hướng /resources sang blog (tùy chọn)
public/brand/         ← Logo WTP (đỏ / trắng)
```

## 🧭 Sơ đồ đường dẫn (13 trang + Kiến thức)

- `/` — Trang chủ
- `/dich-vu` — Tổng quan dịch vụ
- `/dich-vu/chien-luoc-dieu-hanh` — Chiến lược & Điều hành
- `/dich-vu/tai-chinh` — Tài chính
- `/dich-vu/tu-van-thue` — Tư vấn Rủi ro Thuế
- `/dich-vu/nhan-su` — Nhân sự
- `/dich-vu/van-hanh-cong-nghe` — Vận hành & Công nghệ
- `/dich-vu/marketing-sales` — Marketing & Bán hàng
- `/dich-vu/ma-goi-von` — M&A & Gọi vốn
- `/dich-vu/bfo-thue-ngoai` — BFO (Quản trị thuê ngoài)
- `/bang-gia` — Bảng giá
- `/gioi-thieu` — Giới thiệu
- `/lien-he` — Liên hệ + Form đặt lịch
- `/kien-thuc` — Kiến thức (danh sách bài viết)
- `/kien-thuc/<slug>` — Chi tiết từng bài viết (9 bài, mỗi nhóm dịch vụ ≥1 bài)

---

## 📨 Kết nối Form liên hệ với email/CRM

Form ở trang `/lien-he` hiện chạy ở chế độ demo (hiện thông báo cảm ơn).
Khi muốn nhận lead thật, mở `app/components/sections/ContactForm.tsx`, tìm dòng
có chú thích `// Demo: chưa nối backend` và thay bằng lệnh gửi dữ liệu tới email
hoặc CRM (ví dụ tạo API route `/api/lead`). Có thể nhờ hỗ trợ thêm phần này.

© 2026 WTP Advisory · A member of WTP Group
