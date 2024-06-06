import { Laoder } from "@/common";
import { Leaders } from "@/pages-components";
import { Suspense } from "react";

function LeadersPage() {
  return (
    <Suspense fallback={<Laoder />}>
      <Leaders />;
    </Suspense>
  );
}

export default LeadersPage;
