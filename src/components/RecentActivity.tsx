type ActivityTagVariant = "success" | "info" | "warning";

type ActivityItem = {
  title: string;
  description: string;
  icon: string;
  iconStyle?: string;
  badgeLabel: string;
  badgeVariant: ActivityTagVariant;
};

const activityItems: ActivityItem[] = [
  {
    title: "[Recent Activity Title]",
    description: "[Short detail] • [Time]",
    icon: "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/checkmark-circle-outline.svg",
    iconStyle: "bg-tertiary-container/10 text-tertiary",
    badgeLabel: "[XP/Label]",
    badgeVariant: "success",
  },
  {
    title: "[Recent Activity Title]",
    description: "[Short detail] • [Time]",
    icon: "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/book-outline.svg",
    iconStyle: "bg-primary-container/10 text-primary",
    badgeLabel: "[Status]",
    badgeVariant: "info",
  },
  {
    title: "[Recent Activity Title]",
    description: "[Short detail] • [Time]",
    icon: "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/trophy-outline.svg",
    iconStyle: "bg-secondary-container/20 text-secondary",
    badgeLabel: "[Badge]",
    badgeVariant: "warning",
  },
];

const badgeStyles: Record<ActivityTagVariant, string> = {
  success: "bg-tertiary-fixed text-on-tertiary-fixed",
  info: "bg-primary-fixed text-on-primary-fixed-variant",
  warning: "bg-secondary-fixed text-on-secondary-fixed-variant",
};

export default function RecentActivity() {
  return (
    <div className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-headline-md text-headline-md">Recent Activity</h3>
        <button
          className="text-primary font-label-bold text-label-bold flex items-center gap-1 hover:underline"
          type="button"
        >
          View History
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </button>
      </div>
      <div className="space-y-5">
        {activityItems.map((item) => (
          <div key={item.title} className="flex items-center gap-4 group">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                item.iconStyle ?? "bg-surface-container text-on-surface"
              }`}
            >
              <img src={item.icon} alt="" className="w-5 h-5" />
            </div>
            <div className="flex-grow">
              <h4 className="font-label-bold text-[14px]">{item.title}</h4>
              <p className="text-label-md text-on-surface-variant">
                {item.description}
              </p>
            </div>
            <span
              className={`${
                badgeStyles[item.badgeVariant]
              } px-2 py-1 rounded text-[10px] font-bold uppercase`}
            >
              {item.badgeLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
