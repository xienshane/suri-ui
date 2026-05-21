"use client";

import { usePathname } from "next/navigation";
import DashboardShell from "@/components/DashboardShell";

const DASHBOARD_ROUTES = [
  "/dashboard",
  "/lessons",
  "/practice",
  "/progress",
  "/calculator",
  "/settings",
];

export default function AppShellWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardRoute = DASHBOARD_ROUTES.includes(pathname);

  if (isDashboardRoute) {
    return (
      <DashboardShell>
        <div key={pathname} className="page-content">
          {children}
        </div>
      </DashboardShell>
    );
  }

  return <>{children}</>;
}
