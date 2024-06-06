"use client";
import { Button, Stepper } from "@/common";
import styes from "./welcome.module.css";
import { FirstStep, Letsgo, SecondStep, ThirdStep } from "./components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NextBgImage from "next-bg-image";
import backgroundImage from "../../../public/images/welcome-bg.png";
import {userStore, gameStore, womenStore} from '../../stores/store';

export const WelcomePage = () => {
  const [step, setStep] = useState(0);
  const [isLetsgo, setIsLetsgo] = useState(false);
  const router = useRouter();
  const userName = userStore((state) => state.username);
  const setisFirst = userStore((state) => state.setisFirst);
  const setPoint = userStore((state) => state.setPoint);
  const settopPick = userStore((state) => state.settopPick);

  const setGameStatus = gameStore((state) => state.setgamestatus);
  const setRoundId = gameStore((state) => state.setRoundId);
  const setendAt = gameStore((state) => state.setendAt);

  const setWomen = womenStore((state) => state.setWomen);
  
  const handleContinue = () => {
    if (step < 2) {
      setStep((prev) => prev + 1);
    }
    if ( step == 0 ){
    fetch("https://lovetap-backend.vercel.app/user/selectUser/?username=" + userName, {
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
        // Process the JSON data
        if(data.userInfo.top_pick != 0) {
          setisFirst(false);
        }
        setPoint(data.userInfo.point);
        settopPick(data.userInfo.top_pick);
        setGameStatus(data.gameStatus);
        setRoundId(data.currentRound.roundId);
        setendAt(data.currentRound.endAt);
        setWomen(data.womens);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with your fetch operation:', error);
      });
    }
    else if (step === 2) {
      router.push("/home");
    }
  };

  return (
    <NextBgImage
      src={backgroundImage}
      className={`pb-[70px] w-full min-h-screen relative`}
    >
      {!isLetsgo ? (
        <Letsgo setIsLetsgo={setIsLetsgo} />
      ) : (
        <div>
          <div className="w-full flex justify-center pt-2.5">
            <Stepper setStep={setStep} steps={["1", "2", "3"]} active={step} />
          </div>
          {step === 0 && <FirstStep />}
          {step === 1 && <SecondStep />}
          {step === 2 && <ThirdStep handleContinue={handleContinue} />}
          <div className="px-[18px] pt-[18px] ">
            <Button onClick={handleContinue}>Continue</Button>
          </div>
        </div>
      )}
    </NextBgImage>
  );
};
