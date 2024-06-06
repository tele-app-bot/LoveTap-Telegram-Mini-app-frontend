"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./range-money-modal.module.css";
import { Button } from "@/common";
import { Props } from "./types";
import { Points, Range } from "./components";
import { useState } from "react";
import {userStore,gameStore,tmpbetStore} from '../../../../../../stores/store'

export const RangeMoneyModal = ({ open, close }: Props) => {
  const [step, setStep] = useState<"range" | "points">("range");
  const userName = userStore((state) => state.username);
  const player = tmpbetStore((state) => state.player);
  const playerid = tmpbetStore((state) => state.playerid);
  const betAmount = tmpbetStore((state => state.betAmount))
  const setPoint = userStore((state) => state.setPoint);

  const continueHandle = () => {
    if (step === "range") {
      setStep("points");
    } else {
    fetch("https://lovetap-backend.vercel.app/user/bet/?username=" + userName + "&womenId=" + playerid + "&point=" + betAmount, {
      method: 'GET',
      headers: {"Access-Control-Allow-Origin" : "*"}
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then(data => {
        setPoint(data.point);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with your fetch operation:', error);
      });
      close();
    }
  };

  return (
    <>
      <div
        onClick={close}
        className={` ${
          !open ? "hidden" : ""
        }  w-full fixed top-0 flex justify-center items-center left-0 z-[9999] h-screen ${
          styles.modal_overview
        } `}
      ></div>
      <div
        className={` ${!open ? "hidden" : ""}  ${
          styles.modal_bg
        } w-[339px] pt-[24px]  fixed  rounded-[20px] -translate-y-1/2  top-1/2 -translate-x-1/2 pb-[30px] left-1/2 z-[999999]`}
      >
        {step === "range" ? <Range /> : <Points />}
        <div className="px-[18px] mt-8">
          <Button onClick={continueHandle}>Continue</Button>
        </div>
      </div>
    </>
  );
};
