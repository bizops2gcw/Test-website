"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { SERVICES, SITE } from "../../site.config";
import { PACKAGES } from "../../data/packages";
import type { ContactSection } from "../../section-types";

type Status = "idle" | "submitting" | "success";

export default function ContactForm({ data }: { data: ContactSection }) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    pkg: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Vui lòng nhập họ tên.";
    if (!form.phone.trim()) e.phone = "Vui lòng nhập số điện thoại.";
    else if (!/^[0-9+()\s.-]{8,}$/.test(form.phone))
      e.phone = "Số điện thoại chưa hợp lệ.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email chưa hợp lệ.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Demo: chưa nối backend. Khi triển khai thật, gửi tới API/CRM tại đây.
    // Ví dụ: await fetch("/api/lead", { method: "POST", body: JSON.stringify(form) })
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section className="section-pad bg-white" id="form">
      <div className="container-wtp">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: heading + contact info */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Liên hệ"
              title={data.title ?? "Đặt lịch tư vấn miễn phí"}
              intro={
                data.intro ??
                "Để lại thông tin — chuyên gia WTP Advisory sẽ liên hệ trong vòng 24 giờ làm việc để xếp lịch buổi tư vấn chẩn đoán đầu tiên."
              }
            />
            <ul className="mt-8 space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-wtp-blue-tint text-wtp-blue">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-wtp-mid">Hotline</div>
                  <a
                    href={SITE.hotlineHref}
                    className="font-semibold text-wtp-navy hover:text-wtp-red"
                  >
                    {SITE.hotline}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-wtp-blue-tint text-wtp-blue">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-wtp-mid">Email</div>
                  <a
                    href={SITE.emailHref}
                    className="font-semibold text-wtp-navy hover:text-wtp-red"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-wtp-blue-tint text-wtp-blue">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-wtp-mid">Văn phòng</div>
                  <div className="font-semibold text-wtp-navy">
                    {SITE.address}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-wtp-light bg-wtp-soft p-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-wtp-red" />
                <h3 className="mt-4 text-2xl font-extrabold text-wtp-navy">
                  Cảm ơn {form.name.split(" ").slice(-1)[0] || "Anh/Chị"}!
                </h3>
                <p className="mt-3 max-w-md text-wtp-text">
                  Yêu cầu tư vấn đã được ghi nhận. Chuyên gia WTP Advisory sẽ
                  liên hệ với Anh/Chị qua số <strong>{form.phone}</strong> trong
                  vòng 24 giờ làm việc.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm({
                      name: "",
                      company: "",
                      phone: "",
                      email: "",
                      service: "",
                      pkg: "",
                      message: "",
                    });
                    setStatus("idle");
                  }}
                  className="mt-6 text-sm font-semibold text-wtp-red hover:underline"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-2xl border border-wtp-light bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Họ và tên *"
                    error={errors.name}
                    input={
                      <input
                        type="text"
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Nguyễn Văn A"
                        className={inputCls(errors.name)}
                      />
                    }
                  />
                  <Field
                    label="Tên doanh nghiệp"
                    input={
                      <input
                        type="text"
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Công ty TNHH ..."
                        className={inputCls()}
                      />
                    }
                  />
                  <Field
                    label="Số điện thoại *"
                    error={errors.phone}
                    input={
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="09xx xxx xxx"
                        className={inputCls(errors.phone)}
                      />
                    }
                  />
                  <Field
                    label="Email"
                    error={errors.email}
                    input={
                      <input
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="ceo@congty.vn"
                        className={inputCls(errors.email)}
                      />
                    }
                  />
                  <Field
                    label="Dịch vụ quan tâm"
                    input={
                      <select
                        value={form.service}
                        onChange={set("service")}
                        className={inputCls()}
                      >
                        <option value="">— Chọn dịch vụ —</option>
                        {SERVICES.map((s) => (
                          <option key={s.href} value={s.label}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    }
                  />
                  <Field
                    label="Gói dịch vụ"
                    input={
                      <select
                        value={form.pkg}
                        onChange={set("pkg")}
                        className={inputCls()}
                      >
                        <option value="">— Chưa xác định —</option>
                        {PACKAGES.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} · {p.objective}
                          </option>
                        ))}
                      </select>
                    }
                  />
                </div>
                <div className="mt-5">
                  <Field
                    label="Nội dung cần tư vấn"
                    input={
                      <textarea
                        value={form.message}
                        onChange={set("message")}
                        rows={4}
                        placeholder="Mô tả ngắn gọn thách thức lớn nhất doanh nghiệp đang gặp..."
                        className={inputCls()}
                      />
                    }
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-wtp-red px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-wtp-red-dark disabled:opacity-70 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Đang gửi...
                    </>
                  ) : (
                    <>
                      <Phone className="h-5 w-5" /> Gửi yêu cầu tư vấn
                    </>
                  )}
                </button>
                <p className="mt-3 text-xs text-wtp-mid">
                  Thông tin của Anh/Chị được bảo mật tuyệt đối và chỉ dùng cho
                  mục đích tư vấn.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-lg border bg-white px-4 py-2.5 text-[15px] text-wtp-navy outline-none transition-colors placeholder:text-wtp-mid focus:border-wtp-red focus:ring-2 focus:ring-wtp-red/20 ${
    error ? "border-wtp-red" : "border-wtp-light"
  }`;
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-wtp-navy">
        {label}
      </span>
      {input}
      {error && <span className="mt-1 block text-xs text-wtp-red">{error}</span>}
    </label>
  );
}
