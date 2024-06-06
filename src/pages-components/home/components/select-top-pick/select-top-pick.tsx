import NextBgImage from "next-bg-image";
import backgroundImage from "../../../../../public/images/welcome-bg.png";
import { BROKETS } from "@/mock";
import { AlertModal, Card } from "./components";
import { useReducer, useState, useSyncExternalStore } from "react";
import { Button } from "@/common";
import { Props } from "./types";
import styles from "./select-top-pick.module.css";
import {userStore, womenStore, selectStore} from '../../../../stores/store'


export const SelectTopPick = ({ setPage }: Props) => {

  type GameStatus = {
      id: number;
      name: string;
  }
  const [select, setSelect] = useState<number | undefined>(undefined);
  const [open, setOpen] = useState(false)
  const userName = userStore((state) => state.username);

  const women = womenStore((state: { women: Array<GameStatus> }) => state.women)
  const setName = selectStore((state) => state.setName)
  const setSrc = selectStore((state) => state.setSrc)
  const setisFirst = userStore((state) => state.setisFirst);
  const handleContinue = () => {
    if (!select) {
      setOpen(true)
    } else {
      SetTopPicK(),
      setisFirst(false),
      setName(women.at(select-1)?.name),
      setSrc("/avatars/avatar-" + select + ".png"),
      setPage('main')
    }
  }

  async function SetTopPicK(){
    await fetch("https://lovetap-backend.vercel.app/user/selectTopPick/?womenId=" + select + "&username=" + userName, {
      method: 'GET',
      headers: {"Access-Control-Allow-Origin" : "*"}
    });
  }

  return (
    <NextBgImage
      src={backgroundImage}
      className={`w-full pb-[70px] h-full min-h-screen relative`}
    >
      <div className="pt-4 pb-[26px]">
        <h1 className="text-[19px] mt-4 text-[#FCFCFC] font-bold leading-[22.99px] text-center">
          Select your TOP PICK
        </h1>
      </div>
      <div className="px-[18px] pb-[50px] gap-4 grid grid-cols-3">
        {women.map((user, index) => (
          <Card
            onClick={() => setSelect(user.id)}
            checked={select === user.id}
            key={index}
            user={{
              name: user.name,
              img: "/avatars/avatar-" + user.id +".png"
            }}
          />
        ))}
      </div>

      <Button
        className={` ${styles.button} fixed bottom-[84px]`}
        onClick={
          () => {
            handleContinue()
          }
        }
        isShadow
      >
        Continue
      </Button>
      <AlertModal open={open} close={() => setOpen(false)} />
    </NextBgImage>
  );
};
