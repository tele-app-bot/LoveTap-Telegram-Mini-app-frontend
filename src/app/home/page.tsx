import { Laoder } from "@/common";
import { Home } from "@/pages-components";
import { Suspense } from "react";

function HomePage() {
  return (
    <Suspense fallback={<Laoder />}>
      <Home />;
    </Suspense>
  );
}

export default HomePage;
