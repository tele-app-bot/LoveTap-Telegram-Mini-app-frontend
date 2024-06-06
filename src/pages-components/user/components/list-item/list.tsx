import { cn } from "@/lib/utils";
import { Props } from "./types";

export const ListItem = ({ label, value, className }: Props) => (
  <div
    className={cn(
      "flex mb-2 pb-[14px] border-b border-b-solid border-b-[#9A83C085] pt-[6px] justify-between",
      className
    )}
  >
    <p className="text-base font-normal text-[#FCFCFC] leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
      {label}
    </p>
    <p className="text-base font-medium leading-[19.2px] tracking-[-0.40799999237060547px] text-right text-[#FCFCFC]">
      {value}
    </p>
  </div>
);
