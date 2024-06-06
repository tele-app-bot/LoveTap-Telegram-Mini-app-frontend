import Image from "next/image";
import {tmpbetStore} from '../../../../../../../../stores/store'

export const Points = () => {

  const player = tmpbetStore((state) => state.player);
  const betAmount = tmpbetStore((state) => state.betAmount);
  return (
    <div>
      <div className="w-full justify-center flex">
        <Image src="/images/big-coin.png" width={95} height={95} alt="coin" />
      </div>
      <div className="flex mt-4 flex-col justify-center">
        <p className="text-[22px] text-[#FCFCFC] font-bold leading-[30.8px] text-center">
          You bet {betAmount} points
        </p>
        <p className="text-[22px] text-[#FCFCFC] font-bold leading-[30.8px] text-center">
          on {player}
        </p>
      </div>
    </div>
  );
};
