import { Icon } from "@/common";
import { IconProps } from "@/common/icon/types";

export const HeartIcon = (props: IconProps) => (
  <Icon viewBox="0 0 14 12" fill="none" {...props}>
    <g filter="url(#filter0_d_2040_1303)">
      <path
        d="M9.769 0C8.59225 0 7.56475 0.743286 7 1.71443C6.43525 0.743286 5.40775 0 4.231 0C2.446 0 1 1.49207 1 3.333C1 4.25464 1.351 5.09771 1.92325 5.7145C3.22225 7.11386 7 11 7 11C7 11 10.7778 7.11386 12.0768 5.7145C12.6692 5.07718 13.0005 4.22259 13 3.333C13 1.49207 11.554 0 9.769 0Z"
        fill="#FCFCFC"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2040_1303"
        x="-3"
        y="0"
        width="20"
        height="19"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2040_1303"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2040_1303"
          result="shape"
        />
      </filter>
    </defs>
  </Icon>
);
