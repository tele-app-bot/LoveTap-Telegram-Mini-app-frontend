/* eslint-disable @next/next/no-img-element */
import { DollorIcon } from "@/icons";
import styles from "./balance.module.css";
export const Balance = () => {
  return (
    <div className="px-[18px]">
      <div
        className={`${styles.bg} relative w-full h-[100px] rounded-[10px] mt-6`}
      >
        <div className="flex justify-between items-center pl-[18px] pr-3 pt-4">
          <p className=" text-base font-normal leading-[19.2px] text-[#FFFFFF] tracking-[-0.40799999237060547px] text-center">
            Points Balance:
          </p>
          <h2 className="text-[32px] gap-x-2 flex items-center drop-shadow-md font-bold leading-[38.73px] text-right text-white">
            <div className="w-[25px] bg-[#FFBD3D] h-[25px] rounded-full flex justify-center items-center">
              <DollorIcon className="w-[7px] h-[14px]" />
            </div>
            12,345
          </h2>
        </div>
        <img
          src="/images/balance-bg.png"
          alt="bg"
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
};
