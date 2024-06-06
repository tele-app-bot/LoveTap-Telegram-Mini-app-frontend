"use client";
import { BOTTOMBAR } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

export const BottomBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="fixed bg-[#381F56] flex px-8 justify-between bottom-0 w-full">
      {BOTTOMBAR.map((bottom, index) => (
        <div
          key={index}
          className={`flex relative ${
            pathname === bottom.path ? "text-white" : "text-[#785A9C]"
          } py-3 w-[75px] flex-col items-center gap-y-2`}
          onClick={() => router.push(bottom.path)}
        >
          {pathname === bottom.path ? bottom.activeIcon : bottom.icon}
          <p
            className={`text-xs font-medium leading-[14.52px] text-center ${
              pathname === bottom.path ? "text-white" : "text-[#785A9C]"
            }`}
          >
            {bottom.label}
          </p>
          {pathname === bottom.path && (
            <div className="absolute bg-white top-0 w-full h-[2px] rounded-md"></div>
          )}
        </div>
      ))}
    </div>
  );
};
