"use client";
import { ArrowUpIcon } from "@/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SpecialImages = () => {
  const router = useRouter();

  return (
    <div className="px-[18px] pt-6">
      <h1 className="text-[19px] text-[#FFFFFF] font-bold leading-[22.99px] text-left">
        Special Images Collection:
      </h1>
      <div className="flex gap-x-[18px] pt-4">
        <Image
          width={65}
          height={65}
          src="/avatars/avatar-6.png"
          className="rounded-[5px]"
          alt="img"
        />
        <Image
          width={65}
          height={65}
          className="rounded-[5px]"
          src="/avatars/avatar-7.png"
          alt="img"
        />
        <Image
          width={65}
          height={65}
          className="rounded-[5px]"
          src="/avatars/avatar-8.png"
          alt="img"
        />
      </div>
      <div
        onClick={() => router.push("/invite-friend")}
        className="flex justify-between pt-6 pb-[22px]"
      >
        <h1 className="text-xl text-white font-medium leading-7 text-left">
          Invite a friend
        </h1>
        <button>
          <ArrowUpIcon className="text-[#E9E4E6] rotate-90" />
        </button>
      </div>
    </div>
  );
};
