import { Props } from "./type";
import styles from "./stepper.module.css";
import React from "react";

export const Stepper = ({ steps, active, setStep }: Props) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={` ${
                index === active || index < active
                  ? styles.cricle_bg
                  : styles.inactive_cricle_bg
              } flex justify-center items-center w-6 h-6 rounded-full`}
              onClick={() => setStep(index)}
            >
              <div className="w-2 h-2 rounded-full bg-[#F2F4F7]"></div>
            </div>
            {steps.length - 1 !== index ? (
              <div className="min-w-[43px] ml-[6px] mr-[3px] h-[2px] bg-[#4A3564]"></div>
            ) : (
              ""
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="text-white text-base font-normal leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
        <p>
          Step {active + 1}/{steps.length}
        </p>
      </div>
    </div>
  );
};
