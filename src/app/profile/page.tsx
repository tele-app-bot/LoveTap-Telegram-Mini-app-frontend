import { Laoder } from "@/common";
import { Profile } from "@/pages-components";
import { Suspense } from "react";

function ProfilePage() {
  return (
    <Suspense fallback={<Laoder />}>
      <Profile />
    </Suspense>
  );
}

export default ProfilePage;
