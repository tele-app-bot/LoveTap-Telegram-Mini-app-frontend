import { Laoder } from "@/common";
import { InviteFriend } from "@/pages-components";
import { Suspense } from "react";

export default function InviteFriendPage() {
  return (
    <Suspense fallback={<Laoder />}>
      <InviteFriend />
    </Suspense>
  );
}
