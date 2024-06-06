/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./third-step.module.css";
import { Button } from "@/common";
import { DollorIcon } from "@/icons";
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import CountUp from "react-countup";
import { Props } from "./types";

const workSans = Work_Sans({ subsets: ["latin"] });

export const ThirdStep = ({ handleContinue }: Props) => {
  return (
    <div>
      <div className="flex justify-center pt-8">
        <h1 className="flex text-[19px] text-[#FCFCFC] font-bold leading-[22.99px] text-center">
          Welcome to LOVE
          <div
            className={`px-[14px] ml-[4px] text-sm font-medium leading-[22px] tracking-[-0.40799999237060547px] text-right text-[#FCFCFC] rotate-[-5deg] rounded-[20px] ${styles.tap} `}
          >
            Tap
          </div>
        </h1>
      </div>
      <div className="px-7 pt-[43px] pb-[44px]">
        <div className="flex justify-center">
          <Image
            alt="image"
            className="h-[83px]"
            src="/images/avatar-group.png"
            width={316}
            height={83}
          />
        </div>
        <div className="mt-[27px]">
          <div className="py-2">
            <Button className="!rotate-[-6.08deg]" onClick={handleContinue}>
              Choose your Top Pick
            </Button>
          </div>
          <p className="text-base text-[#FCFCFC] font-normal leading-[19.2px] tracking-[-0.40799999237060547px] text-center">
            and receive
          </p>
          <div className="flex mt-[10px] w-full justify-center">
            <h2
              className={` text-center flex items-center gap-x-2 text-[34px] text-[#FCFCFC] font-bold leading-[39.88px] tracking-[-0.02em]  ${workSans.className}`}
            >
              <CountUp start={700000} end={1000000} />
              <div className="w-[36.33px] h-[36.33px] bg-[#FFBD3D] rounded-full flex justify-center items-center">
                <DollorIcon />
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="px-[18px] w-full">
        <div className="py-[21px] px-[13px]  border-[1.5px] border-solid border-[#FFFFFF80] rounded-[20px] mt-6">
          <p className=" text-[#FCFCFC] text-base font-normal leading-[22px] tracking-[-0.40799999237060547px] text-left">
            Now, before we get started, you have to pick which woman you think
            is going to win the entire tournament, and if you’re correct, you’ll
            be awarded 1,000,000 points
          </p>
        </div>
      </div>
    </div>
  );
};
