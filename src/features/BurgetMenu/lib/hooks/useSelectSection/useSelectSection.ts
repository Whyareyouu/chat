import { useCallback, useEffect, useState } from "react";
import { MenuSection } from "features/BurgetMenu/ui/menu.config";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserId, userActions } from "entities/User";
import { useSelector } from "react-redux";

export const useSelectSection = () => {
  const [selectSection, setSelectSection] = useState<MenuSection>(
    MenuSection.ALL_CHATS
  );
  const dispatch = useAppDispatch();
  const userId = useSelector(getUserId);

  const handleSelectSection = useCallback(
    (section: MenuSection) => {
      setSelectSection(section);
    },
    [selectSection]
  );
  useEffect(() => {
    switch (selectSection) {
      case MenuSection.PROFILE:
        break;
      case MenuSection.ALL_CHATS:
        break;
      case MenuSection.SAVED_MESSAGES:
        console.log(userId);
        break;
      case MenuSection.LOGOUT:
        dispatch(userActions.logout());
        window.location.reload();
        break;
      default:
        break;
    }
  }, [selectSection, userId, dispatch]);

  return {
    selectSection,
    handleSelectSection,
  };
};
