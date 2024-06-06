"use client";
import Image from "next/image";
import { Props } from "./types";
import styles from "./card.module.css";
import { DollorIcon } from "@/icons";

export const Card = ({ user, onClick, checked }: Props) => {
  return (
    <div className='blok flex-col items-center'>
      <div
        onClick={onClick}
        className={`bg-[#FEEEEE] border-[3px] ${
          checked ? "border-[#9454b7]" : ""
        } rounded-[4px] relative `}
      >
        <div className="w-full h-full cursor-pointer overflow-hidden">
          <Image
            src= {user.img}
            className="rounded-[4px] w-full h-full"
            alt={user.name}
            width={102}
            height={102}
          />
        </div>
        {checked && (
          <div className=" absolute top-[-15px] flex justify-center items-center right-[-15px] w-[36px] h-[36px] rounded-full bg-[#FFBD3D]">
            <DollorIcon className="w-[10px] h-[20px]" />
          </div>
        )}
      </div>
      <p className='text-center text-[18px] font-medium text-[#FCFCFC] mt-2'>
        {user.name}
      </p>
    </div>
  );
};
