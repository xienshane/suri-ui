import Sidebar from "@/components/Sidebar";
import RecentActivity from "@/components/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="font-body-md text-on-surface h-[100dvh] box-border flex overflow-hidden p-3 gap-3 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f5f7ff_35%,_#e4edff_55%,_#ffe89f_85%)]">
      <Sidebar />
      <main className="flex-grow flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl border border-outline-variant/10 relative backdrop-blur-sm">
        <div className="flex-grow overflow-y-auto no-scrollbar p-8" style={{ scrollbarGutter: "stable" }}>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">
                Welcome back, [User]! 👋
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                [Progress summary placeholder goes here.]
              </p>
            </div>
            <div className="flex gap-3">
              <button
                className="bg-secondary-container text-on-secondary-container px-5 py-2.5 rounded-lg font-label-bold text-label-bold shadow-md hover:brightness-110 transition-all flex items-center gap-2"
                type="button"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/play-circle-outline.svg"
                  alt=""
                  className="w-5 h-5"
                />
                Resume Lesson
              </button>
              <button
                className="bg-surface-container-high text-on-surface px-5 py-2.5 rounded-lg font-label-bold text-label-bold hover:brightness-95 transition-all flex items-center gap-2"
                type="button"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/star-outline.svg"
                  alt=""
                  className="w-5 h-5"
                />
                Daily Challenge
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-gutter mb-8">
            <div className="col-span-12 lg:col-span-8 bg-primary text-white rounded-xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
              <div className="relative z-10">
                <span className="font-label-bold text-[11px] bg-white/20 px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-wider">
                  [Metric Label]
                </span>
                <h3 className="font-display text-[56px] leading-tight font-black mt-4">
                  [Metric Value]
                </h3>
                <p className="font-body-lg text-body-lg text-primary-fixed opacity-90 max-w-sm">
                  [Metric description placeholder.]
                </p>
              </div>
              <div className="relative z-10 mt-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-bold text-label-bold">
                    [Goal label]
                  </span>
                  <span className="font-label-bold text-label-bold">
                    [Delta]
                  </span>
                </div>
                <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                  <div className="bg-tertiary-fixed h-full w-[78%] rounded-full shadow-[0_0_15px_rgba(105,255,135,0.6)]"></div>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-secondary-container text-on-secondary-container rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <img
                    src="https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/time-outline.svg"
                    alt=""
                    className="w-8 h-8"
                  />
                  <span className="text-on-secondary-container/60 font-label-bold">
                    [Range]
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg mt-4">
                  [Primary Stat]
                </h3>
                <p className="font-body-md text-body-md mt-1 opacity-80">
                  [Stat description placeholder.]
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-white/40 p-4 rounded-lg">
                  <span className="block font-label-bold text-label-bold opacity-70">
                    [Stat Label]
                  </span>
                  <span className="text-headline-md font-bold">[Value]</span>
                </div>
                <div className="bg-white/40 p-4 rounded-lg">
                  <span className="block font-label-bold text-label-bold opacity-70">
                    [Stat Label]
                  </span>
                  <span className="text-headline-md font-bold text-tertiary">
                    [Value]
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-gutter">
            <RecentActivity />
            <div className="col-span-12 lg:col-span-5 bg-white border border-outline-variant/20 rounded-xl p-8">
              <h3 className="font-headline-md text-headline-md mb-6">
                [Recommended Section Title]
              </h3>
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden aspect-[21/9] group cursor-pointer">
                  <img
                    alt="[Recommended Image]"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc76_N6TRoTpatW-p7PlQtmx_Q7bKrYI_dQ2bA46aEUNwK8x4AuM-B4Z_pHL6DKCVvv1KqyaUY9kU-UMkckTPxKcX1A4EsW2KQjn8kkrrRqu2EZZPVxPrTwtBCFDI7keoZ__qVIQMMMqfUXGLSalGLIcYZqsHGlc7MZi7Xzbjval6l_0KTwXvdOZ_a9AM7CNYh-3sVlbCTNZCAPue3wwDqS5u_rG1oKOqRezWES6X1ACfOLpLwD233BxVm9NtIjonbvEi6O8uY38Y"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-white/80 text-[9px] uppercase tracking-widest font-bold">
                      [Tag]
                    </span>
                    <h5 className="text-white font-headline-md leading-tight text-[16px]">
                      [Recommended Title]
                    </h5>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-surface-container flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary w-8 h-8 rounded-md flex items-center justify-center text-white">
                      <img
                        src="https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/calculator-outline.svg"
                        alt=""
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <span className="block font-label-bold text-label-bold">
                        [Recommended Item]
                      </span>
                      <span className="text-label-md text-on-surface-variant">
                        [Metadata]
                      </span>
                    </div>
                  </div>
                  <img
                    src="https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/chevron-forward-outline.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-6 right-6 bg-secondary-container text-on-secondary-container w-14 h-14 rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-105 active:scale-95 transition-all group"
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">chat</span>
          <div className="absolute bg-white text-on-secondary-container font-label-bold text-[10px] px-2 py-0.5 rounded-full -top-1 -right-2 shadow-sm border border-secondary-container/20 scale-0 group-hover:scale-100 transition-transform">
            Ask SURI
          </div>
        </button>
      </main>
    </div>
  );
}
