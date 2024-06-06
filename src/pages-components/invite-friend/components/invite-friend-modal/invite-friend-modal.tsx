import Image from "next/image";
import styles from "./congratulations-modal.module.css";
import { Button } from "@/common";
import { Props } from "./types";
import { DollorIcon } from "@/icons";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export const InviteFriendModal = ({ open, close }: Props) => {
  return (
    <>
      <div
        onClick={close}
        className={` ${
          !open ? "hidden" : ""
        }  w-full fixed top-0 flex justify-center items-center left-0 z-[9999] h-screen ${
          styles.modal_overview
        } `}
      ></div>
      <div
        className={` ${!open ? "hidden" : ""}  ${
          styles.modal_bg
        } w-[339px] pt-[24px]  fixed  rounded-[20px] -translate-y-1/2  top-1/2 -translate-x-1/2 left-1/2 z-[999999]  pb-[25px]`}
      >
        <div>
          <div className="flex justify-center w-full">
            <div className="w-[132px] relative h-[133px] bg-gray-300 rounded-[6px]">
              <Image
                alt="username"
                src="/avatars/avatar-1.png"
                width={132}
                height={133}
              />
            </div>
          </div>
        </div>
        <h1 className="text-[22px] mt-4 font-bold leading-[30.8px] text-center text-[#FCFCFC]">
          You voted for NATASHA
        </h1>
        <p className="text-base text-[#FCFCFC] my-2 font-normal leading-[19.2px] tracking-[-0.40799999237060547px] text-center">
          If she wins, you will get{" "}
        </p>
        <div className="flex justify-center">
          <h3
            className={` ${workSans.className} flex text-[#FCFCFC] items-center gap-x-1 text-2xl font-bold leading-[28.15px] tracking-[-0.02em] text-left`}
          >
            1,000,000
            <div className="w-[25px] bg-[#FFBD3D] h-[25px] rounded-full flex justify-center items-center">
              <DollorIcon className="w-[7px] h-[14px]" />
            </div>
          </h3>
        </div>
        <div className="px-[18px] mt-8">
          <Button onClick={close}>Continue</Button>
        </div>
      </div>
    </>
  );
};
