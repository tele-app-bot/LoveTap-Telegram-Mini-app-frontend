import NextBgImage from "next-bg-image";

import backgroundImage from "../../../public/images/profile-bg.png";
import {
  ActiveWager,
  Balance,
  FirstBet,
  Header,
  SpecialImages,
} from "./components";

export const Profile = () => {
  return (
    <NextBgImage
      src={backgroundImage}
      className={`pb-[70px] w-full min-h-screen`}
    >
      <Header />
      <Balance />
      <ActiveWager />
      <FirstBet />
      <SpecialImages />
    </NextBgImage>
  );
};
