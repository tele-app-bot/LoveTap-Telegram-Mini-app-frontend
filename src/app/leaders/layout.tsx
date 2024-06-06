import { BottomBar } from "@/layouts/layout";
import { ReactNode } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <BottomBar />
    </div>
  );
}
