import Image from "next/image";
import styles from "./first-step.module.css";
import { Button } from "@/common";

export const FirstStep = () => {
  return (
    <div>
      <div className="flex justify-center pt-8">
        <h1 className="flex text-[19px] text-[#FCFCFC] font-bold leading-[22.99px] text-center">
          Welcome to LOVE
          <div
            className={`px-[14px] ml-[4px] text-sm font-medium leading-[22px] tracking-[-0.40799999237060547px] text-right text-[#FCFCFC] rotate-[-5deg] rounded-[20px] ${styles.tap} `}
          >
            Tap
          </div>
        </h1>
      </div>
      <p className="text-center mt-2 text-[#FCFCFC] text-base font-normal leading-[19.2px] tracking-[-0.40799999237060547px]">
        Meet <span className={`${styles.liear_text}`}>Bradley,</span> our dream
        bachelor!
      </p>
      <div className="px-7 pt-11 relative">
        <div
          className={`w-full h-full flex justify-center rounded-[15px] ${styles.card_linear} `}
        >
          <Image
            src={"/images/welcome-img-1.png"}
            alt="img"
            width={281}
            height={254}
            className="translate-y-[-40px]"
          />
        </div>
        <div
          className={` ${styles.blur_card_bg}  absolute bottom-0 -translate-x-1/2 left-1/2 bg-blend-overlay w-[90%] justify-between flex text-white  rounded-[10px] border border-[#FFFFFF2B] py-[6.5px] px-[25px]`}
        >
          <div>
            <p className="text-xs font-normal opacity-[0.69]  leading-[22px] tracking-[-0.40799999237060547px] text-left">
              Age:
            </p>
            <p className="drop-shadow-[0px_4px_4px_0px_#00000040] text-xs font-medium leading-[22px] tracking-[-0.40799999237060547px] text-left">
              34
            </p>
          </div>
          <div>
            <p className="text-xs font-normal opacity-[0.69]  leading-[22px] tracking-[-0.40799999237060547px] text-left">
              Interests:
            </p>
            <p className="  drop-shadow-[0px_4px_4px_0px_#00000040] text-xs font-medium leading-[22px] tracking-[-0.40799999237060547px] text-left">
              sports, art, traveling
            </p>
          </div>
          <div>
            <p className="text-xs font-normal opacity-[0.69] leading-[22px] tracking-[-0.40799999237060547px] text-left">
              Goal:
            </p>
            <p className="drop-shadow-[0px_4px_4px_0px_#00000040] text-xs font-medium leading-[22px] tracking-[-0.40799999237060547px] text-left">
              to find true love
            </p>
          </div>
        </div>
        <div
          className={` ${styles.crile_shadow} w-[66px] flex justify-center items-center h-[66px] rounded-full bg-white absolute top-[55px] left-[6px]`}
        >
          <Image src="/images/Fire.png" alt="fire" width={34} height={34} />
        </div>
        <div
          className={` ${styles.crile_shadow} w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white absolute top-[69px] right-[56px]`}
        >
          <Image
            src="/images/red-heart.png"
            alt="fire"
            width={18}
            height={18}
          />
        </div>
        <div
          className={` ${styles.crile_shadow} w-[65px] flex justify-center items-center h-[65px] rounded-full bg-white absolute top-[107px] right-[5px]`}
        >
          <Image src="/images/rose.png" alt="fire" width={36} height={37} />
        </div>
      </div>
      <div className="px-[18px] w-full">
        <div className="py-[21px] px-[13px]  border-[1.5px] border-solid border-[#FFFFFF80] rounded-[20px] mt-6">
          <p className=" text-[#FCFCFC] text-base font-normal leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
            We have 32 amazing women dreaming of a date with Bradley. Each week,
            you can vote for who advances in the tournament. You can also bet on
            the winners of each round.
          </p>
        </div>
      </div>
    </div>
  );
};
