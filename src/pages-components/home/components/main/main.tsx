"use client";
import Image from "next/image";
import {
  CongratulationsModal,
  Header,
  Timer,
  RangeMoneyModal,
  VoteButton,
  YourTopPickModal
} from "./components";
import styles from "./main.module.css";
import { NEW_GAMES } from "@/mock/games";
import React, { useRef, useState } from "react";
import backgroundImage from "../../../../../public/images/welcome-bg.png";
import NextBgImage from "next-bg-image";
import {userStore,gameStore,tmpbetStore} from '../../../../stores/store'

export const Main = () => {
  type UserGroup = {
    user: string;
    id?: number;
    img?: string;
    count: number;
    index: number;
  }

  type GameStatus = {
    round: number;
    groups: UserGroup[];
  }
  const setPlayer = tmpbetStore((state) => state.setPlayer);
  const setPlayerId = tmpbetStore((state) => state.setPlayerId);
  const gameStatus = gameStore((state: { gameStatus: Array<GameStatus> }) => state.gameStatus);
  const RoundId = gameStore((state) => state.RoundId);
  const isFirst = userStore((state) => state.isFirst);
  const [currentRound, setCurrentRound] = useState(0);
  const [open, setOpen] = useState(false);
  const [depozet, setDepozet] = useState(false);
  const [yourPick, setYourPick] = useState(isFirst);
  const handleBet = (player: any) => {
    setPlayer(player?.user);
    setPlayerId(player?.id);
    setDepozet(true);
  };

  return (
    <NextBgImage
      src={backgroundImage}
      className={`w-full pb-[70px] h-full min-h-screen relative`}
    >
      <Header />
      <div className="pl-[15px] mt-[19px]">
        <div className="max-w-full scrollbar-hide overflow-x-auto flex gap-x-[75px]">
          {gameStatus.map((_, index) => (
            <div key={index} className="flex text-[#FCFCFC]  gap-x-1" onClick={() =>setCurrentRound(index)}>
              <p
                className={` ${
                  index === currentRound ? "font-[700]" : "font-normal"
                }  text-sm  leading-[16.8px] tracking-[-0.40799999237060547px] text-right`}
              >
                ROUND
              </p>
              <p
                className={`${
                  index === currentRound ? "font-[700]" : "font-normal"
                } text-sm  leading-[16.8px] tracking-[-0.40799999237060547px] text-right`}
              >
                {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[16px]">
        <p className="text-sm mt-[13px] font-normal leading-[16.8px] tracking-[-0.40799999237060547px] text-left text-[#FCFCFC]">
          Choose which woman you think will win.
        </p>
        {currentRound + 1 == RoundId ? <Timer type={"end"}/> : ( currentRound + 1 == RoundId + 1 ? <Timer type={"start"}/> : null)}
      </div>
      <div className="flex pl-[15px] max-w-full py-[20px] scrollbar-hide overflow-x-auto h-full">
        {gameStatus.slice(RoundId-1,RoundId+1).map((round, roundIndex) => (
          currentRound + 1 == RoundId ? (
            <div
              key={roundIndex}
              className="flex justify-around gap-y-[34px] flex-col"
            >
              {round.groups.map((player: any, playerIndex: number) => (
                <div key={playerIndex} className="flex items-center h-full ">
                  {roundIndex !== 0 && (
                    <div className="pr-[8.5px] py-[18px] flex items-center mr-[25px] relative h-[55%] rounded-r-[8px] border-b border-b-[#CBC7C8] border-t border-t-[#CBC7C8] border-r border-r-[#CBC7C8] pl-[9.5px]">
                      <div className="h-[1px] absolute right-[-17px] top-1/2  w-[17px] bg-[#957EAA]"></div>
                    </div>
                  )}
                  <div className="flex h-full items-center">
                    <div className="flex flex-col gap-y-4 items-center">
                      <div className="w-[69px] relative h-[69px] rounded-[4px] bg-white">
                        <Image
                          src={RoundId == roundIndex + 1 ? "/avatars/avatar-"+ player?.id +".png" : "/images/question.png"}
                          alt="avatar"
                          width={69}
                          height={69}
                          className="rounded-[4px]"
                        />
                        {RoundId === roundIndex + 1 && <VoteButton setWomenID = {player?.id} />}
                      </div>
                      {RoundId === roundIndex + 1 ? (
                        <button
                          onClick={() =>
                            handleBet(player)
                          }
                          className={`${styles.button_bg} drop-shadow-md text-[11px] w-[105px] font-semibold leading-[13.2px] tracking-[-0.40799999237060547px] text-center  rounded-[45px]  py-[8px]  text-[#FCFCFC]`}
                        >
                          BET ON {player?.user}
                        </button>
                      ) : (
                        <>
                          {roundIndex === 0 && <div className="py-[8px]"></div>}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null
        ))}
      </div>
      <Image
        src={"/images/tournoment-assent-image.png"}
        alt="img"
        width={111}
        height={203}
        className="absolute top-[168px] right-0 "
      />
      <Image
        width={135}
        height={98}
        alt="img"
        src={"/images/tournoment-assent-image-2.png"}
        className="absolute bottom-0 right-12"
      />
      <CongratulationsModal open={open} close={() => setOpen(false)} />
      <RangeMoneyModal close={() => setDepozet(false)} open={depozet}/>
      <YourTopPickModal open={yourPick} close={() => setYourPick(false)} />
    </NextBgImage>
  );
};
