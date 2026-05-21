export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7ff] px-8 py-10 text-[#111827]">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
            Settings
          </p>
          <h1 className="text-3xl font-extrabold tracking-[-0.02em] text-[#0f172a]">
            Account Settings
          </h1>
          <p className="text-sm text-[#4b5563]">
            Manage your profile, security, and learning preferences.
          </p>
        </header>

        <section className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-[#0f172a]">Profile</h2>
              <p className="text-sm text-[#6b7280]">
                Update your name, email, and student details.
              </p>
            </div>
            <button
              className="rounded-full bg-[#001a54] px-4 py-2 text-xs font-semibold text-white"
              type="button"
            >
              Edit Profile
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-[#0f172a]">Security</h2>
              <p className="text-sm text-[#6b7280]">
                Change your password and manage devices.
              </p>
            </div>
            <button
              className="rounded-full border border-[#d1d5db] px-4 py-2 text-xs font-semibold text-[#111827]"
              type="button"
            >
              Update Password
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-[#0f172a]">Notifications</h2>
              <p className="text-sm text-[#6b7280]">
                Control reminders, weekly summaries, and tips.
              </p>
            </div>
            <button
              className="rounded-full border border-[#d1d5db] px-4 py-2 text-xs font-semibold text-[#111827]"
              type="button"
            >
              Manage Alerts
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
