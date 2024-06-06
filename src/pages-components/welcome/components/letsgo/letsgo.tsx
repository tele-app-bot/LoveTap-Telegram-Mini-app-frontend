"use client";
import { Button } from "@/common";
import { tree } from "next/dist/build/templates/app-page";
import Image from "next/image";
import { Props } from "./types";

/* eslint-disable react/no-unescaped-entities */
export const Letsgo = ({ setIsLetsgo }: Props) => {
  return (
    <div className="min-h-[90vh] px-[18px] flex flex-col justify-center items-center">
      <Image
        src={"/images/letsgo-assents-01.png"}
        alt="img"
        width={140}
        height={165}
        className="absolute bottom-0 right-0"
      />
      <Image
        src={"/images/letsgo-assents-02.png"}
        alt="img"
        width={165}
        height={165}
        className="absolute top-0 left-0"
      />
      <Image
        src={"/images/letsgo-assents-03.png"}
        alt="img"
        width={58}
        height={114}
        className="absolute top-[30px] right-0"
      />
      <h1 className="text-[19px] font-bold leading-[22.99px] text-center text-[#FCFCFC]">
        Let's get started!
      </h1>
      <p className="text-base font-normal w-[75%]  mt-2  mb-6 text-[#FCFCFC] leading-[19.2px] text-[#FCFCFC]] tracking-[-0.40799999237060547px] text-center">
        We'll now to go the tournament bracket where you can place your votes
        and bets on each round.
      </p>
      <Button onClick={() => setIsLetsgo(true)}>Continue</Button>
    </div>
  );
};
