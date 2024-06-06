import { Icon } from "@/common";
import { IconProps } from "@/common/icon/types";

export const CheckIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 16 12" {...props}>
      <path
        d="M5.37547 9.675L2.31297 6.6125C1.97172 6.27125 1.42922 6.27125 1.08797 6.6125C0.746719 6.95375 0.746719 7.49625 1.08797 7.8375L4.75422 11.5037C5.09547 11.845 5.64672 11.845 5.98797 11.5037L15.263 2.2375C15.6042 1.89625 15.6042 1.35375 15.263 1.0125C14.9217 0.671249 14.3792 0.671249 14.038 1.0125L5.37547 9.675Z"
        fill="currentColor"
      />
    </Icon>
  );
};
