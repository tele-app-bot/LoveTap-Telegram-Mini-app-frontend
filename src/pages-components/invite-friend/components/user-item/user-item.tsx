import { CheckIcon, Plus } from "@/icons";
import Image from "next/image";
import { Props } from "./types";
import { InviteFriendModal } from "../invite-friend-modal";
import { useState } from "react";

export const UserItem = ({ user }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex border-b border-b-[#e0e0e021] pb-[18px] justify-between gap-x-3 items-center">
      <div className="flex gap-x-3">
        <div className="bg-white overflow-hidden rounded-full">
          <Image width={39} height={39} src={user.image} alt={user.name} />
        </div>
        <div>
          <p className="text-base font-normal text-[#FCFCFC] leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
            {user.name}
          </p>
          <p
            style={{ color: "rgba(252, 252, 252, 1)" }}
            className="text-sm mt-[3px] font-medium leading-[16.8px] tracking-[-0.40799999237060547px] text-left"
          >
            {user.phone_number}
          </p>
        </div>
      </div>
      <button
        disabled={user.status}
        onClick={() => setOpen(true)}
        className={`
         disabled:border-[#FCFCFC] disabled:opacity-40 border text-[#FCFCFC] border-solid px-[13px] py-[8px] rounded-[9px] border-[#FCFCFC]`}
      >
        {user.status ? (
          <CheckIcon className="w-[14px] h-[11px]" />
        ) : (
          <Plus className="w-[14px] h-[14px]" />
        )}
      </button>
      <InviteFriendModal open={open} close={() => setOpen(false)} />
    </div>
  );
};
