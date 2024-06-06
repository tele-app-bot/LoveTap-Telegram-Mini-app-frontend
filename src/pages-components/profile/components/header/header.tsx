"use client";
import { PenEditIcon } from "@/icons/pen";
import Image from "next/image";
import styles from "./header.module.css";
import { useRef, useState } from "react";
export const Header = () => {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);

  const EdiPen = () => {
    inputRef?.current?.click();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pt-[21px] ">
      <div className="w-20 h-20 relative bg-white  rounded-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={
              file ? URL?.createObjectURL(file as any) : "/avatars/avatar-1.png"
            }
            alt="profile_name"
            width={80}
            height={80}
            className="rounded-full"
          />
          <input
            id="input"
            type="file"
            onChange={(e: any) => setFile(e.target.files[0])}
            hidden
          />
        </div>
        <label
          htmlFor="input"
          onClick={EdiPen}
          className={`${styles.edit_button_bg}  right-1 -bottom-1 rounded-full p-[7.5px] absolute`}
        >
          <PenEditIcon className="w-[12px] h-[13px] text-white" />
        </label>
      </div>
      <h1 className="text-lg font-medium text-[#FCFCFC] mt-4 leading-[21.6px] tracking-[0.3799999952316284px] text-center">
        Nadila Aulia
      </h1>
    </div>
  );
};
