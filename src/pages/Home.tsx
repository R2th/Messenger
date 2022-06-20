import { FC } from "react";
import SideBar from "../components/Home/SideBar";
import Menu from "../components/Menu";

const Home: FC = () => {
  return (
    <div className="flex">
      <div className="bg-dark-lighten flex flex h-screen w-[350px] gap-6">
        <Menu />
      </div>
      <SideBar />

      <div className="hidden flex-grow flex-col items-center justify-center gap-3 md:!flex">
        <h1 className="text-center">Select a conversation to start chatting</h1>
      </div>
    </div>
  );
};

export default Home;
