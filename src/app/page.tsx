"use client";
import { WelcomePage } from "@/pages-components";
import { useInitData } from '@tma.js/sdk-react';
import {userStore} from '../stores/store'
function Home() {
  const setusername = userStore((state) => state.setUsername);
  const initData = useInitData(true);
  const handleUsername = () => {
    setusername(initData?.user?.username); // Increment the count by 5
  };
  if(initData?.user?.username != null)
    handleUsername();
  return <WelcomePage />;
}

export default Home;
