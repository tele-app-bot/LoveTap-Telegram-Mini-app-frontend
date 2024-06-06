"use client";
import { ArrowLeft, DollorIcon } from "@/icons";
import { useRouter } from "next/navigation";
import { Card } from "./components";
import { Button } from "@/common";
import ConfettiExplosion from "react-confetti-explosion";
import NextBgImage from "next-bg-image";
import backgroundImage from "../../../public/images/round-result-bg.png";
import { useEffect, useState } from "react";

export const RoundResult = () => {
  const router = useRouter();
  const [congratulation, setCongratulation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCongratulation(false);
    }, 9000);
  }, []);

  return (
    <NextBgImage src={backgroundImage} className={`w-full min-h-screen`}>
      <div className="px-[18px] items-center  pt-[16px] flex justify-between">
        <button onClick={() => router.push("/home")} className="text-[#FCFCFC]">
          <ArrowLeft />
        </button>
        <h1 className="text-[19px] text-[#FCFCFC] font-bold leading-[22.99px] text-center">
          Round Results
        </h1>
        <div />
      </div>

      <div className="px-[18px]">
        <div className="py-[14px] my-6 gap-x-[6px] rounded-[8px] flex justify-center  items-center  bg-[#ffffff2e] w-full">
          <p className="text-base font-normal text-[#FCFCFC] leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
            Your total points:{" "}
            <span className="font-[700] text-[19px]">130</span>
          </p>
          <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full bg-[#FFBD3D]">
            <DollorIcon className="w-[6px] h-[11px]" />
          </div>
        </div>
      </div>
      <div className="px-[18px] flex flex-col gap-y-4 ">
        <Card
          matchTitle="Match 1"
          firstUser={{
            name: "Amanda",
            procent: 64,
          }}
          secondUser={{
            name: "Becky",
            procent: 36,
          }}
          winuser={{
            name: "Amanda",
            image: "/avatars/avatar-1.png",
          }}
          result="You won 50 points!"
        />
        <Card
          matchTitle="Match 2"
          firstUser={{
            name: "Victoria",
            procent: 69,
          }}
          secondUser={{
            name: "Becky",
            procent: 32,
          }}
          winuser={{
            name: "Victoria",
            image: "/avatars/avatar-2.png",
          }}
          result="Oh, you lost 45 points..."
        />
      </div>
      <div className="px-[18px] py-[31px]">
        <Button>Continue to Next Round</Button>
        <button
          onClick={() => router.push("/home")}
          className="w-full py-4  text-lg text-[#FCFCFC]  font-medium leading-[21.6px] tracking-[0.3799999952316284px] text-center"
        >
          Close
        </button>
      </div>
      <ConfettiExplosion />
    </NextBgImage>
  );
};
