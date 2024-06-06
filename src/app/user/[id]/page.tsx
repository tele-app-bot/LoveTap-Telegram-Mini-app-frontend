import { Laoder } from "@/common";
import { User } from "@/pages-components";
import { Suspense } from "react";

export default function UserPage() {
  return (
    <Suspense fallback={<Laoder />}>
      <User />
    </Suspense>
  );
}
