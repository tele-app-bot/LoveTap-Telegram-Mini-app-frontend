"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./congratulations-modal.module.css";
import { Button } from "@/common";
import { Props } from "./types";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const CongratulationsModal = ({ open, close }: Props) => {
  const [congratulation, setCongratulation] = useState(false);
  const router = useRouter();

  const continueHandle = () => {
    close();
    router.push("/round-results");
  };

  useEffect(() => {
    if (open) {
      setCongratulation(true);
      setTimeout(() => {
        setCongratulation(false);
      }, 5000);
    }
  }, [open]);

  return (
    <>
      <div
        onClick={close}
        className={` ${
          !open ? "hidden" : ""
        }  w-full fixed top-0 flex justify-center items-center left-0 z-[9999] h-screen ${
          styles.modal_overview
        } `}
      >
        <Confetti numberOfPieces={200} recycle={false} run={congratulation} />
      </div>
      <div
        className={` ${!open ? "hidden" : ""}  ${
          styles.modal_bg
        } w-[339px] pt-[24px]  fixed  rounded-[20px] -translate-y-1/2  top-1/2 -translate-x-1/2 left-1/2 z-[999999] h-[361px]`}
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
              <div className=" absolute top-[10px] left-[-20px] text-xl font-normal leading-6 tracking-[-0.40799999237060547px] text-left w-[47px] h-[47px] bg-[#FCFCFC] rounded-full flex justify-center items-center">
                🎉
              </div>
              <div className="w-[66px] absolute bottom-[15px] right-[-45px] h-[66px] rounded-full bg-white text-4xl font-normal leading-[43.2px] tracking-[-0.40799999237060547px] text-left flex justify-center  items-center">
                🎁
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[22px] mt-4 font-bold leading-[30.8px] text-center text-[#FCFCFC]">
          Congratulations!
        </h1>
        <p className="text-base text-[#FCFCFC] mt-2 text-center font-normal leading-[19.2px] tracking-[-0.40799999237060547px] ">
          You've unlocked a new image of <br /> NATASHA.
        </p>
        <div className="px-[18px] mt-8">
          <Button onClick={continueHandle}>Continue</Button>
        </div>
      </div>
    </>
  );
};
