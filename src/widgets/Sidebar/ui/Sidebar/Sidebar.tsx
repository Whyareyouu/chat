import { Settings, StyledSidebar, Users } from "./Sidebar.styles";
import { getIsSearchingBool, SearchingUser } from "features/SearchingUsers";
import { useSelector } from "react-redux";
import { BurgerMenu, useSelectSection } from "features/BurgetMenu";
import { UserProfile } from "features/UserProfile";
import { MenuSection } from "features/BurgetMenu/ui/menu.config";
import { ChatList } from "widgets/Sidebar/ui/ChatList/ChatList";
import { SearchResultList } from "widgets/Sidebar/ui/SearchResultList/SearchResultList";

export const Sidebar = () => {
  const isSearching = useSelector(getIsSearchingBool);
  const { selectedSection } = useSelectSection();
  const Profile = selectedSection === MenuSection.PROFILE && <UserProfile />;
  const Chats = (selectedSection === MenuSection.ALL_CHATS ||
    selectedSection === MenuSection.SAVED_MESSAGES) && (
    <Users>{isSearching ? <SearchResultList /> : <ChatList />}</Users>
  );

  return (
    <StyledSidebar>
      <Settings>
        <BurgerMenu />
        <SearchingUser />
      </Settings>
      {Profile}
      {Chats}
    </StyledSidebar>
  );
};
