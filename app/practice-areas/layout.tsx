import type { ReactNode } from "react";

interface PracticeLayoutProps {
  children: ReactNode;
}

export default function PracticeLayout({
  children,
}: PracticeLayoutProps) {
  return <main>{children}</main>;
}