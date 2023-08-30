import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BurgerIcon,
  BurgerItem,
  BurgerList,
  StyledBurgerMenu,
} from "./BurgerMenu.styles";
import { CgProfile } from "react-icons/cg";
import { MdSaveAs } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [menuRef, iconRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <StyledBurgerMenu isOpen={isOpen}>
      <div ref={iconRef}>
        <BurgerIcon onClick={handleToggleMenu} />
      </div>
      <BurgerList isOpen={isOpen} ref={menuRef}>
        <BurgerItem>
          <span>
            <CgProfile />
          </span>{" "}
          Профиль
        </BurgerItem>
        <BurgerItem>
          <span>
            <MdSaveAs />
          </span>
          Сохраненные сообщения
        </BurgerItem>
        <BurgerItem>
          <span>
            <CiLogout />
          </span>
          Выйти
        </BurgerItem>
      </BurgerList>
    </StyledBurgerMenu>
  );
};
