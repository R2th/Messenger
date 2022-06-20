import { FC, useState, useEffect } from "react";
import ClickAwayListener from "../ClickAwayListener";
import { signOut } from "firebase/auth";
import { auth } from "../../shared/firebase";
import { DEFAULT_AVATAR, IMAGE_PROXY } from "../../shared/constants";
import { useStore } from "../../store";
import UserInfo from "../Home/UserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Menu: FC = () => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const currentUser = useStore((state) => state.currentUser);
  const [isUserInfoOpened, setIsUserInfoOpened] = useState(false);
  return (
    <div>
      <div>
        <ClickAwayListener onClickAway={() => setIsDropdownOpened(false)}>
          {(ref) => (
            <div ref={ref} className="relative z-10">
              <img
                onClick={() => setIsDropdownOpened((prev) => !prev)}
                className="h-8 w-8 cursor-pointer rounded-full object-cover"
                src={
                  currentUser?.photoURL
                    ? IMAGE_PROXY(currentUser.photoURL)
                    : DEFAULT_AVATAR
                }
                alt=""
              />

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
      </div>
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
    <div>
      <div className={`before:box-border before:content-['\f015'] ${icon}`}>
        {name}
      </div>
    </div>
  );
};

export default Menu;
