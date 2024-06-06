import { Icon } from "@/common";
import { IconProps } from "@/common/icon/types";

export const ArrowUpIcon = (props: IconProps) => {
  return (
    <Icon fill="none" viewBox="0 0 29 29" {...props}>
      <path
        d="M20.5 17.5L14.5 11.5L8.5 17.5"
        stroke="currentColor"
        stroke-opacity="0.61"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};
