import { DollorIcon } from "@/icons";
import { Props } from "./types";
import { cn } from "@/lib/utils";

export const Coin = ({ coin, className }: Props) => {
  return (
    <div className={cn("flex gap-x-px items-center", className)}>
      <p className="text-xs text-[#FCFCFC]">+{coin}</p>
      <div className="w-[16px] h-[16px] bg-[#FFBD3D] items-center flex justify-center rounded-full">
        <DollorIcon className="w-[6px] h-[14px]" />
      </div>
    </div>
  );
};
