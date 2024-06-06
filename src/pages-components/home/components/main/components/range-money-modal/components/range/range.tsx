import { useState } from "react";
import { Range as RangeUI, getTrackBackground } from "react-range";
import {userStore, tmpbetStore} from '../../../../../../../../stores/store'

export const Range = () => {
  const point = userStore((state) => state.point);
  const setbetAmount = tmpbetStore((state) => state.setbetAmount);
  const [value, setValue] = useState([point]);

  const handleInput = (value: string) => {
    if (Number(value) <= point) {
      setValue([Number(value)]);
      setbetAmount(Number(value));
    }
  };

  return (
    <div>
      <div className="px-[38px]">
        <h2 className="text-[19px] mb-[91px] font-bold text-[#FCFCFC] leading-[22.99px] text-center">
          Select how many points you want to install
        </h2>
      </div>
      <div className="px-[27px]">
        <div className="relative w-full max-w-md">
          <RangeUI
            step={1}
            min={0}
            max={point}
            values={value}
            onChange={(values) => {
              setValue(values),
              setbetAmount(values)
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  background: getTrackBackground({
                    values: value,
                    colors: ["#9454B7", "#eeeeee38"],
                    min: 0,
                    max: point,
                  }),
                }}
                className=" h-[12px] w-full rounded-[44px] !bg-[#EEEEEE38] "
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{ ...props.style }}
                className="w-[30px] h-[30px] relative rounded-full bg-white border-[7px] border-[#9454B7]"
              >
                <div
                  className={`!px-[14.5px] py-[7px] absolute  text-white text-sm z-10 font-semibold leading-[21px] tracking-[0.36000001430511475px] text-center -translate-x-1/2 left-1/2 rounded-[32px] top-[-53px]  bg-[#6D5B8C] `}
                >
                  <div className="relative w-full h-full ">
                    <div
                      className={`w-3 h-3 bg-[#6D5B8C] absolute  bottom-[-12px] right-1/2 translate-x-1/2 rotate-45`}
                    ></div>
                    {value}
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex  items-center justify-center gap-2 py-8">
        <p className="text-[15px] font-normal leading-[22.5px] tracking-[0.36000001430511475px] text-left text-[#FCFAFC]">
          Total:
        </p>
        <input
          type="number"
          maxLength={1000}
          minLength={0}
          value={value[0].toString()}
          onChange={(e) => handleInput(e.target.value)}
          className="px-[14px] text-white border border-solid border-[#FFFFFF80] py-[9px] max-w-[84px]  bg-transparent rounded-[25px] outline-none "
        />
      </div>
    </div>
  );
};
