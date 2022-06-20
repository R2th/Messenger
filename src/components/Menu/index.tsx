import { FC, useState, useEffect } from "react";
import ClickAwayListener from "../ClickAwayListener";
import { signOut } from "firebase/auth";
import { auth } from "../../shared/firebase";
import { DEFAULT_AVATAR, IMAGE_PROXY } from "../../shared/constants";
import { useStore } from "../../store";
import UserInfo from "../Home/UserInfo";
import "./index.css";

const Menu: FC = () => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const currentUser = useStore((state) => state.currentUser);
  const [isUserInfoOpened, setIsUserInfoOpened] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "20px",
      }}
      className="py-8"
    >
      <img
        className="h-[100px] w-[100px] cursor-pointer rounded-full drop-shadow-md"
        src={
          currentUser?.photoURL
            ? IMAGE_PROXY(currentUser.photoURL)
            : DEFAULT_AVATAR
        }
        alt=""
      />
      <ClickAwayListener onClickAway={() => setIsDropdownOpened(false)}>
        {(ref) => (
          <div ref={ref} className="relative z-10">
            <div style={{ width: "100%" }}>
              <h1 className="text-l" style={{ fontWeight: "bold" }}>
                {currentUser?.displayName}
                <span className="ml-5">
                  <button onClick={() => setIsDropdownOpened((prev) => !prev)}>
                    v
                  </button>
                </span>
              </h1>
            </div>

            <div
              className={`border-dark-lighten bg-dark absolute top-full right-0 flex w-max origin-top-right flex-col items-stretch overflow-hidden rounded-md border py-1 shadow-lg transition-all duration-200 ${
                isDropdownOpened
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-0 opacity-0"
              }`}
            >
              <button
                onClick={() => {
                  setIsUserInfoOpened(true);
                  setIsDropdownOpened(false);
                }}
                className="hover:bg-dark-lighten flex items-center gap-1 px-3 py-1 transition duration-300"
              >
                <i className="bx bxs-user text-xl"></i>
                <span className="whitespace-nowrap">Profile</span>
              </button>
              <button
                onClick={() => signOut(auth)}
                className="hover:bg-dark-lighten flex items-center gap-1 px-3 py-1 transition duration-300"
              >
                <i className="bx bx-log-out text-xl"></i>
                <span className="whitespace-nowrap">Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </ClickAwayListener>
      <div
        className="mx-4"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {[
          { name: "Properties", icon: "fa-house" },
          { name: "Chat", icon: "" },
          { name: "Calendar", icon: "" },
          { name: "Offers", icon: "" },
          { name: "Documents", icon: "" },
          { name: "Settings", icon: "" },
        ].map((items) => (
          <MenuItem name={items.name} icon={items.icon} />
        ))}
      </div>

      <UserInfo isOpened={isUserInfoOpened} setIsOpened={setIsUserInfoOpened} />
    </div>
  );
};

interface MenuItemProps {
  name: string;
  icon: string;
}

const MenuItem: FC<MenuItemProps> = ({ name, icon }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "20px",
        fontSize: "20px",
        color: "gray",
      }}
    >
      <img src={icon} alt="img" style={{ width: "20%", marginRight: "10px" }} />
      <div className={`before:box-border before:content-['\f015'] ${icon}`}>
        {name}
      </div>
    </div>
  );
};

export default Menu;
