import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BurgerIcon,
  BurgerItem,
  BurgerList,
  StyledBurgerMenu,
} from "./BurgerMenu.styles";
import { menuConfig } from "features/BurgetMenu/ui/menu.config";
import { useSelectSection } from "../lib/hooks/useSelectSection/useSelectSection";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const { handleSelectSection } = useSelectSection();

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
        {menuConfig.map((menuItem) => (
          <BurgerItem
            key={menuItem.section}
            onClick={() => handleSelectSection(menuItem.section)}
          >
            <span>{menuItem.icon}</span>
            {menuItem.section}
          </BurgerItem>
        ))}
      </BurgerList>
    </StyledBurgerMenu>
  );
};
