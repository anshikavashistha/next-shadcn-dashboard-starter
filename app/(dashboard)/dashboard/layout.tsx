import Header from "@/components/layout/Header/header";
import { Sidebar } from "@/components/layout/Sidebar/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-x-hidden overflow-y-hidden">
        <Sidebar className="w-1/6 hidden md:block" />
        <main className="flex-1 overflow-y-scroll pt-16">{children}</main>
      </div>
    </>
  );
}