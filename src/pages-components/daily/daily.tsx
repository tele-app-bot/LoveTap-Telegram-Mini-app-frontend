/* eslint-disable react/no-unescaped-entities */
"use client";
import NextBgImage from "next-bg-image";
import backgroundImage from "../../../public/images/profile-bg.png";
import { ArrowRight } from "@/icons";
import { Button } from "@/common";
import styles from "./daily.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const DailyPage = () => {
  const router = useRouter();
  return (
    <NextBgImage
      src={backgroundImage}
      className={`pb-[70px] w-full min-h-screen relative`}
    >
      <div className="flex flex-col pt-[42px] items-center">
        <h1 className="text-[19px] font-bold leading-[22.99px] text-center text-[#FCFCFC]">
          Daily Reveal
        </h1>
        <p className="text-base w-[70%] text-[#FCFCFC]  mt-2 text-center font-normal leading-[19.2px] tracking-[-0.40799999237060547px]">
          Every day, you'll receive a new fact or clue about Bradley.
        </p>
      </div>
      <div className="px-[18px] pt-[24px]">
        <div
          className={` ${styles.bg} pb-[24px] pt-4 rounded-[16px] px-[28px]`}
        >
          <p className="text-[15px] font-normal leading-[18.15px] text-[#FCFCFC] -tracking-wider text-center">
            Day 5, Clue Card
          </p>
          <p className="text-xl font-medium leading-7 mt-[24px] text-center text-[#FFFFFF]">
            Bradley’s last 2 girlfriends have both been blondes
          </p>
        </div>
      </div>
      <div>
        <div className="flex px-[17px] gap-x-2 py-4">
          <button>
            <ArrowRight className="-rotate-180" />
          </button>
          <button>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="px-[17px]">
        <Button onClick={() => router.push("/")}>Vote</Button>
        <button
          onClick={() => router.push("/")}
          className="w-full py-4 mt-4 text-lg font-medium leading-[21.6px] tracking-[0.3799999952316284px] text-center text-[#FCFCFC]"
        >
          Close
        </button>
      </div>
      <Image
        src="/images/tournoment-assent-image.png"
        alt="image"
        width={140}
        height={165}
        className="absolute bottom-0 right-0"
      />
    </NextBgImage>
  );
};
