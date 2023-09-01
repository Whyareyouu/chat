import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { MdSaveAs } from "react-icons/md";
import React, { ReactElement } from "react";
import { FaRegMessage } from "react-icons/fa6";
export enum MenuSection {
  PROFILE = "Профиль",
  ALL_CHATS = "Все чаты",
  SAVED_MESSAGES = "Сохраненные сообщения",
  LOGOUT = "Выйти",
}

type MenuConfig = {
  icon: ReactElement;
  section: MenuSection;
}[];

export const menuConfig: MenuConfig = [
  {
    icon: <CgProfile />,
    section: MenuSection.PROFILE,
  },
  {
    icon: <FaRegMessage />,
    section: MenuSection.ALL_CHATS,
  },
  {
    icon: <MdSaveAs />,
    section: MenuSection.SAVED_MESSAGES,
  },
  {
    icon: <CiLogout />,
    section: MenuSection.LOGOUT,
  },
];
