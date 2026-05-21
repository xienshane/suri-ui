"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type AuthShellProps = {
  title: string;
  description: string;
  submitLabel: string;
  submitHref?: string;
  footerText: string;
  footerLinkLabel: string;
  footerLinkHref: string;
  children: React.ReactNode;
};

export default function AuthShell({
  title,
  description,
  submitLabel,
  submitHref,
  footerText,
  footerLinkLabel,
  footerLinkHref,
  children,
}: AuthShellProps) {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitHref) {
      router.push(submitHref);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#e8eaf0] text-[#111827]">
      <div
        className="pointer-events-none absolute -left-24 -top-16 h-[48vw] w-[48vw] rounded-full bg-[#b7c4ff] opacity-60 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-[-10%] h-[44vw] w-[44vw] rounded-full bg-[#fdd400] opacity-30 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[55%] top-6 h-[32vw] w-[32vw] rounded-full bg-[#93c5fd] opacity-25 blur-[140px]"
        aria-hidden="true"
      />

      <main className="relative z-10 flex h-full flex-col items-center justify-center px-10 pb-12">
        <div className="flex w-full max-w-[380px] flex-col items-center">
          <div className="mb-10 flex items-center justify-center">
            <Image src="/SURI.png" alt="SURI" width={140} height={140} priority />
          </div>

          <section
            className="w-full rounded-[24px] border border-white/80 bg-white/95 p-9 shadow-[0_18px_40px_rgba(0,26,84,0.12)] backdrop-blur"
            aria-live="polite"
          >
            <div className="flex flex-col gap-7">
              <div>
                <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#111827]">
                  {title}
                </h2>
                <p className="mt-2 text-sm text-[#4f5368]">{description}</p>
              </div>

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {children}
                <button
                  className={`mt-1 inline-flex w-full items-center justify-center rounded-[12px] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(0,71,204,0.24)] transition hover:-translate-y-0.5 ${
                    submitHref ? "bg-[#0047cc] hover:bg-[#003bb0]" : "bg-[#16a34a] shadow-[0_10px_20px_rgba(21,128,61,0.2)] hover:bg-[#15803d]"
                  }`}
                  type="submit"
                >
                  {submitLabel}
                </button>
              </form>

              <p className="text-center text-[13px] text-[#4f5368]">
                {footerText}
                <Link className="ml-1 font-semibold text-[#0047cc]" href={footerLinkHref}>
                  {footerLinkLabel}
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="absolute bottom-5 left-0 right-0 z-10 text-center text-[11px] text-[#8a8ea8]">
        © 2026 SURI Adaptive Learning Platform. All rights reserved.
      </footer>
    </div>
  );
}
