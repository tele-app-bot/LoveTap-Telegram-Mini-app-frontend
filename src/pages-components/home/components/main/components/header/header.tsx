"use client";
import { ArrowLeft } from "@/icons";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between pt-3 px-[13px] items-center">
      <button onClick={() => router.push("/")} className="text-[#FCFCFC] ">
        <ArrowLeft />
      </button>
      <h1 className="flex items-center text-[#FCFCFC] text-[19px] font-bold leading-[22.99px] text-center">
        Tournament Bracket
      </h1>
      <div />
    </div>
  );
};
