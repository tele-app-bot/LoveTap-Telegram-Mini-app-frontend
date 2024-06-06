import Image from "next/image";
import { Props } from "./types";

export const PlayerCard = ({ image }: Props) => {
  return (
    <div>
      <Image src={image} alt="player" width={69} height={69} />
    </div>
  );
};
