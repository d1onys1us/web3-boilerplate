import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <ConnectButton />
      <p>Hello rainbowkit, wagmi, nextjs, daisyui</p>
    </>
  );
};

export default Home;
