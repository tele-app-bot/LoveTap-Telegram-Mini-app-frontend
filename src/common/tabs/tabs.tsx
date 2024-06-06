"use client";
import { useState } from "react";
import { Props } from "./types";
import { cn } from "@/lib/utils";

export const Tabs = ({ tabs, value, className, baseClassName }: Props) => {
  const [tabValue, setTabValue] = useState(value || tabs[0].value);
  return (
    <>
      <div className={cn("w-full", baseClassName)}>
        <div
          className={cn(
            "flex w-full border-b border-b-[#ffffff1f] pb-[8px] justify-between",
            className
          )}
        >
          {tabs.map((tab, index) => (
            <div key={index}>
              <button
                onClick={() => setTabValue(tab.value)}
                className={`text-sm ${
                  tab.value === tabValue ? "text-[#FCFCFC]" : "text-[#fcfcfcab]"
                }  font-normal leading-[16.8px] tracking-[-0.40799999237060547px] text-right`}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>
      </div>
      {tabs.find((c) => c.value === tabValue)?.content}
    </>
  );
};
