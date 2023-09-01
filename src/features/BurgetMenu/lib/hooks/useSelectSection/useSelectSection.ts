import { useCallback, useEffect } from "react";
import { MenuSection } from "../../../ui/menu.config";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserId, userActions } from "entities/User";
import { useSelector } from "react-redux";
import { burgerActions } from "../../../model/slice/burgerSlice";
import { getSelectedSection } from "features/BurgetMenu";
import { chatActions } from "entities/Chat";

export const useSelectSection = () => {
  const dispatch = useAppDispatch();
  const userId = useSelector(getUserId);
  const selectedSection = useSelector(getSelectedSection);

  const handleSelectSection = useCallback(
    (section: MenuSection) => {
      dispatch(burgerActions.setSelectSection(section));
    },
    [dispatch]
  );
  useEffect(() => {
    switch (selectedSection) {
      case MenuSection.PROFILE:
        break;
      case MenuSection.ALL_CHATS:
        break;
      case MenuSection.SAVED_MESSAGES:
        dispatch(chatActions.setRecipientId(userId!));
        break;
      case MenuSection.LOGOUT:
        dispatch(userActions.logout());
        window.location.reload();
        break;
      default:
        break;
    }
  }, [selectedSection, userId, dispatch]);

  return {
    selectedSection,
    handleSelectSection,
  };
};
