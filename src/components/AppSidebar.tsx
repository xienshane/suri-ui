"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Calculator,
  LayoutGrid,
  LineChart,
  PencilLine,
  Settings,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/lessons", label: "Lessons", icon: BookOpen },
  { href: "/practice", label: "Practice", icon: PencilLine },
  { href: "/progress", label: "Progress", icon: LineChart },
  { href: "/calculator", label: "Calculator", icon: Calculator },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="dashboard__sidebar-wrap">
      <aside className="dashboard__sidebar dashboard__sidebar--logo">
        <div className="dashboard__logo">
          <img alt="SURI" src="/SURI_white.png" />
        </div>
      </aside>
      <aside className="dashboard__sidebar dashboard__sidebar--nav">
        <nav className="dashboard__nav">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                className={`dashboard__nav-item ${isActive ? "is-active" : ""}`}
                href={href}
                title={label}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="icon" aria-hidden="true" />
              </Link>
            );
          })}
        </nav>
      </aside>
      <aside className="dashboard__sidebar dashboard__sidebar--settings">
        <Link
          className={`dashboard__icon-button ${pathname === "/settings" ? "is-active" : ""}`}
          href="/settings"
          title="Settings"
          aria-current={pathname === "/settings" ? "page" : undefined}
        >
          <Settings className="icon" aria-hidden="true" />
        </Link>
      </aside>
    </div>
  );
}
