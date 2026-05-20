type SidebarNavItem = {
  label: string;
  iconUrl: string;
  active?: boolean;
};

type SidebarAction = {
  label: string;
  iconUrl: string;
  variant?: "ghost" | "outline";
};

const navItems: SidebarNavItem[] = [
  {
    label: "Home",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/grid-outline.svg",
    active: true,
  },
  {
    label: "Learn",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/book-outline.svg",
  },
  {
    label: "Practice",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/create-outline.svg",
  },
  {
    label: "Exams",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/checkbox-outline.svg",
  },
  {
    label: "Files",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/library-outline.svg",
  },
];

const footerActions: SidebarAction[] = [
  {
    label: "Settings",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/settings-outline.svg",
    variant: "ghost",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-[72px] sidebar-primary rounded-xl flex flex-col items-center py-5 flex-shrink-0 shadow-lg shadow-primary/10">
      <div className="mb-6 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
        <img
          src="https://cdn.jsdelivr.net/gh/ionic-team/ionicons@7.1.0/src/svg/planet.svg"
          alt="[Brand Logo]"
          className="w-5 h-5"
        />
      </div>
      <nav className="flex flex-col gap-4 items-center">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all active:scale-90 ${
              item.active
                ? "bg-secondary-container text-on-secondary-container"
                : "hover:bg-white/10 text-white"
            }`}
            title={item.label}
            type="button"
          >
            <img
              src={item.iconUrl}
              alt=""
              className={`w-5 h-5 ${item.active ? "" : "invert"}`}
            />
          </button>
        ))}
      </nav>
      <div className="mt-auto flex flex-col items-center gap-3 pb-3">
        <div className="flex flex-col items-center gap-2 text-white">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64&q=80"
            alt="[User Avatar]"
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
        {footerActions.map((action) => (
          <button
            key={action.label}
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-all text-white hover:text-secondary-container"
            title={action.label}
            type="button"
          >
            <img
              src={action.iconUrl}
              alt=""
              className="w-5 h-5 invert"
            />
          </button>
        ))}
      </div>
    </aside>
  );
}
