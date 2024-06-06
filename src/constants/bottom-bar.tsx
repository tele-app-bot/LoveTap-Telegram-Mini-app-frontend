import { FillHome, FillLeader, HomeIcon, Profile } from "@/icons";
import { LeaderIcon } from "@/icons/leader";

export const BOTTOMBAR = [
  {
    label: "Bracket",
    icon: <HomeIcon />,
    path: "/home",
    activeIcon: <FillHome />,
  },
  {
    label: "Leaderboard",
    icon: <LeaderIcon />,
    path: "/leaders",
    activeIcon: <FillLeader />,
  },
  {
    label: "Profile",
    icon: <Profile />,
    path: "/profile",
    activeIcon: <Profile />,
  },
];
