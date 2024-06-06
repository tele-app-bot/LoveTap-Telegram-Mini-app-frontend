"use client";
import { ArrowLeft } from "@/icons";
import styles from "./user.module.css";
import Image from "next/image";
import { ListItem } from "./components";
import { Button } from "@/common";
import { useRouter } from "next/navigation";
import backgroundImage from "../../../public/images/profile-bg.png";
import NextBgImage from "next-bg-image";

export const User = () => {
  const router = useRouter();
  return (
    <NextBgImage
      src={backgroundImage}
      className={` w-full min-h-screen pb-10 `}
    >
      <div className="px-[18px]   pt-[16px] flex justify-between">
        <button
          onClick={() => router.push("/leaders")}
          className="text-[#FCFCFC]"
        >
          <ArrowLeft />
        </button>
        <h1 className="text-[19px] text-[#FCFCFC] font-bold leading-[22.99px] text-center">
          Character Details
        </h1>
        <div />
      </div>
      <div className="w-full flex pt-[19px] justify-center flex-col items-center">
        <div className="w-[118px] h-[118px] bg-white  rounded-[6px]">
          <Image
            src={"/avatars/avatar-1.png"}
            alt="avatar"
            width={118}
            height={118}
          />
        </div>
        <h1 className="text-[25px] mt-3 text-[#FCFCFC] font-medium leading-[35px] text-center">
          Nadila
        </h1>
      </div>
      <div className="px-[18px] mt-[8px]">
        <div className=" border rounded-[10px] border-solid border-[#F2F2F229] py-[6px] px-[16px]">
          <ListItem label="Age:" value="28" />
          <ListItem label="Nationality:" value="Slovenia" />
          <ListItem label="Height:" value="170 cm" />
          <ListItem label="Body Type:" value="Athletic" />
          <ListItem
            label="Eye Color:"
            value="Blue"
            className="border-b-transparent mb-0"
          />
        </div>
      </div>
      <div className="px-[18px] pt-[22px]">
        <div className=" border rounded-[10px] border-solid border-[#F2F2F229] py-[6px] px-[16px]">
          <ListItem label="Hidden Talent:" value="🎹 Piano virtuoso" />
          <ListItem
            label="Fun Fact:"
            value="🤿 Loves diving "
            className="border-b-transparent mb-0"
          />
        </div>
      </div>
      <div className="px-[18px] pt-[48px]">
        <Button>Vote for Anna</Button>
      </div>
    </NextBgImage>
  );
};
