import AuthShell from "@/components/AuthShell";

export default function SignupPage() {
  return (
    <AuthShell
      title="Get started"
      description="Create your SURI account to start mastering math."
      submitLabel="Create Account"
      submitHref="/dashboard"
      footerText="Already have an account?"
      footerLinkLabel="Sign in instead"
      footerLinkHref="/login"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="register-first-name"
          className="text-[13px] font-semibold text-[#111827]"
        >
          First Name
        </label>
        <input
          id="register-first-name"
          type="text"
          placeholder="[First Name]"
          autoComplete="given-name"
          className="w-full rounded-[14px] border border-[#c3c5d9] bg-white px-4 py-2.5 text-[15px] text-[#111827] transition focus:border-[#001a54] focus:outline-none focus:ring-4 focus:ring-[#001a54]/10"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="register-email"
          className="text-[13px] font-semibold text-[#111827]"
        >
          Email address
        </label>
        <input
          id="register-email"
          type="email"
          placeholder="student@school.edu"
          autoComplete="email"
          className="w-full rounded-[14px] border border-[#c3c5d9] bg-white px-4 py-2.5 text-[15px] text-[#111827] transition focus:border-[#001a54] focus:outline-none focus:ring-4 focus:ring-[#001a54]/10"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="register-password"
          className="text-[13px] font-semibold text-[#111827]"
        >
          Choose Password
        </label>
        <input
          id="register-password"
          type="password"
          placeholder="Min. 8 characters"
          autoComplete="new-password"
          className="w-full rounded-[14px] border border-[#c3c5d9] bg-white px-4 py-2.5 text-[15px] text-[#111827] transition focus:border-[#001a54] focus:outline-none focus:ring-4 focus:ring-[#001a54]/10"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-[#4f5368]">
        <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#001a54]" />
        <span>
          I agree to the <a className="text-[#001a54]" href="#">Terms of Service</a> and{" "}
          <a className="text-[#001a54]" href="#">Privacy Policy</a>.
        </span>
      </label>
    </AuthShell>
  );
}
