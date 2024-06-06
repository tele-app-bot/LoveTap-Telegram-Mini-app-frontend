import { ArrowUpIcon, DollorIcon } from "@/icons";
import styles from "./card.module.css";
import Image from "next/image";
import { Props } from "./types";

export const Card = ({
  firstUser,
  secondUser,
  winuser,
  matchTitle,
  result,
}: Props) => {
  return (
    <div className="rounded-[20px] py-[17px] px-[23px] border-[1.5px] border-solid border-[#FFFFFF80]">
      <div className="flex items-center justify-between">
        <p className="text-base text-[#FCFCFC] font-medium leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
          {matchTitle}:
        </p>
        <ArrowUpIcon className="text-[#E9E4E69C]" />
      </div>
      <div className="w-[90%] mt-[13px] gap-x-7 flex">
        <div className="w-[45%]">
          <p className="text-sm text-[#FCFCFC] font-normal leading-[16.8px] tracking-[-0.40799999237060547px] text-left">
            {firstUser.name} -{" "}
            <span className="text-sm font-semibold leading-[16.8px] tracking-[-0.40799999237060547px] text-left">
              {firstUser.procent}
            </span>
          </p>
          <div className="w-full mt-[11px] h-[8px] overflow-hidden bg-[#ffffff40] rounded-[21px] relative">
            <div
              style={{ width: `${firstUser.procent}%` }}
              className={` ${styles.progress} absolute top-0 left-0 h-full`}
            ></div>
          </div>
        </div>
        <div className="w-[45%]">
          <p className="text-sm text-[#FCFCFC] font-normal leading-[16.8px] tracking-[-0.40799999237060547px] text-left">
            {secondUser.name} -{" "}
            <span className="text-sm font-semibold leading-[16.8px] tracking-[-0.40799999237060547px] text-left">
              {secondUser.procent}%
            </span>
          </p>
          <div className="w-full mt-[11px] h-[8px] overflow-hidden bg-[#ffffff40] rounded-[21px] relative">
            <div
              style={{ width: `${secondUser.procent}%` }}
              className={` ${styles.progress} absolute top-0 left-0 h-full  bg-[]`}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2 mt-[21px] mb-[18px] items-center">
        <div className="w-[45px] overflow-hidden  h-[45px] rounded-full bg-white">
          <Image
            width={45}
            height={45}
            alt="avatar"
            src={winuser.image}
            className="rounded-full"
          />
        </div>
        <p className="text-base font-normal text-[#FCFCFC] leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
          Winner -{" "}
          <span className="text-base font-medium leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
            {winuser.name}
          </span>
        </p>
      </div>
      <div className="flex justify-center text-[#FCFCFC] items-center gap-x-[6px]  border border-solid border-[#EAE2E242] py-[12px] w-full rounded-[8px]">
        {result}{" "}
        <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full bg-[#FFBD3D]">
          <DollorIcon className="w-[6px] h-[11px]" />
        </div>
      </div>
    </div>
  );
};
