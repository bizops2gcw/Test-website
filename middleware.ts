import { NextResponse, type NextRequest } from "next/server";

/**
 * Proxy /resources (và /resources/*) sang blog/tài nguyên đặt ở domain ngoài,
 * giúp giữ nội dung SEO trên cùng một tên miền advisory.wtp.vn.
 *
 * Khi triển khai thật: đổi BLOG_ORIGIN sang URL blog thật của WTP Advisory.
 * Nếu chưa có blog, có thể xóa file middleware.ts này — site vẫn chạy bình thường.
 */
const BLOG_ORIGIN = process.env.WTP_BLOG_ORIGIN ?? "https://blog.wtp.vn";

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const rest = pathname.replace(/^\/resources/, "") || "/";
  const target = new URL(`${rest}${search}`, BLOG_ORIGIN);
  return NextResponse.rewrite(target);
}

export const config = {
  matcher: ["/resources", "/resources/:path*"],
};
