"use client";
import { HeartIcon } from "@/icons";
import styles from "./vote-button.module.css";
import { Coin } from "@/common";
import { Props } from "../vote-button/types";
import { useEffect, useState } from "react";
import {userStore} from '../../../../../../stores/store'

export const VoteButton = ({ setWomenID }: Props) => {
  const [click, setClick] = useState(false);
  const userName = userStore((state) => state.username);
  const setPoint = userStore((state) => state.setPoint);

  useEffect(() => {
    if (click) {
      const timer = setTimeout(() => {
        setClick(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [click]);

  async function addvote()
  {
    await fetch("https://lovetap-backend.vercel.app/user/addVote/?username=" + userName + "&womenId=" + setWomenID, {
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
  }
  return (
    <div
      onClick={() => {
          addvote(),
          setClick(true);
        }
      }
      className={`${styles.vote_button_bg}  flex flex-col justify-center items-center w-[35px]  h-[35px] absolute top-[-15px] right-[-15px] rounded-full `}
    >
      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
      <div className="relative flex justify-center items-center flex-col">
        <HeartIcon className="w-[12px] h-[11px]" />
        <p className="text-[#FCFCFC] text-[10px] font-medium leading-3 tracking-[-0.40799999237060547px] text-center">
          vote
        </p>
        <Coin
          coin={1}
          className={`absolute opacity-0 transition-all duration-200 ${
            click ? styles.clicked : ""
          }`}
        />
      </div>
    </div>
  );
};
