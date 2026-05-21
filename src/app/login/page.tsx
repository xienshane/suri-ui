import Link from "next/link";
import AuthShell from "@/components/AuthShell";

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      description="Sign in to continue your learning journey."
      submitLabel="Login"
      submitHref="/dashboard"
      footerText="New here?"
      footerLinkLabel="Create an account"
      footerLinkHref="/signup"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="login-email"
          className="text-[13px] font-semibold text-[#111827]"
        >
          Email address
        </label>
        <input
          id="login-email"
          type="email"
          placeholder="student@school.edu"
          autoComplete="email"
          className="w-full rounded-[14px] border border-[#c3c5d9] bg-white px-4 py-2.5 text-[15px] text-[#111827] transition focus:border-[#001a54] focus:outline-none focus:ring-4 focus:ring-[#001a54]/10"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="login-password"
            className="text-[13px] font-semibold text-[#111827]"
          >
            Password
          </label>
          <a className="text-xs font-semibold text-[#001a54]" href="#">
            Forgot?
          </a>
        </div>
        <input
          id="login-password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          className="w-full rounded-[14px] border border-[#c3c5d9] bg-white px-4 py-2.5 text-[15px] text-[#111827] transition focus:border-[#001a54] focus:outline-none focus:ring-4 focus:ring-[#001a54]/10"
        />
      </div>
    </AuthShell>
  );
}
