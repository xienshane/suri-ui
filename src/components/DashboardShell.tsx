import AppSidebar from "@/components/AppSidebar";

type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="dashboard">
      <AppSidebar />
      <main className="dashboard__main">
        <div className="dashboard__content dashboard__content--scroll">
          {children}
        </div>
      </main>
    </div>
  );
}
