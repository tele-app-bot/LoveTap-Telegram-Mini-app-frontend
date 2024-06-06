import { Laoder } from "@/common";
import { RoundResult } from "@/pages-components";
import { Suspense } from "react";

export default function RoundResultPage() {
  return (
    <Suspense fallback={<Laoder />}>
      <RoundResult />
    </Suspense>
  );
}
