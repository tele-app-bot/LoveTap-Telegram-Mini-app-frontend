"use client";
import { useState } from "react";
import { Main, SelectTopPick } from "./components";
import { userStore } from "../../stores/store"

export const Home = () => {
  const [page, setPage] = useState<"top-pick" | "main">("top-pick");
  const isFirst = userStore((state) => state.isFirst);
  return (
    <div>
      { ( isFirst === false || page === "main" ) && <Main />}
      { (isFirst === true && page === "top-pick") && <SelectTopPick setPage={setPage} />}
    </div>
  );
};
