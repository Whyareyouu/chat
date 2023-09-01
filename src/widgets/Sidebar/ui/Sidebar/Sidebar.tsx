import React, { FC } from "react";
import { Settings, StyledSidebar, Users } from "./Sidebar.styles";
import {
  getIsSearchingBool,
  getSearchResult,
  SearchingUser,
} from "features/SearchingUsers";
import { useSelector } from "react-redux";
import { getAllUserChats } from "widgets/Sidebar/model/selectors/getAllUserChats";
import { BurgerMenu, useSelectSection } from "features/BurgetMenu";
import { UserProfile } from "features/UserProfile";
import { MenuSection } from "features/BurgetMenu/ui/menu.config";
import { ChatList } from "widgets/Sidebar/ui/ChatList/ChatList";
import { SearchResultList } from "widgets/Sidebar/ui/SearchResultList/SearchResultList";

interface SidebarProps {
  handleSelectMessageRecipient: (recipientId: string) => void;
}

export const Sidebar: FC<SidebarProps> = ({ handleSelectMessageRecipient }) => {
  const isSearching = useSelector(getIsSearchingBool);
  const searchingResult = useSelector(getSearchResult);
  const userChats = useSelector(getAllUserChats);
  const { selectSection } = useSelectSection();
  const Profile = selectSection === MenuSection.PROFILE && <UserProfile />;
  const Chats = selectSection === MenuSection.ALL_CHATS && (
    <Users>
      {isSearching ? (
        <SearchResultList
          searchResult={searchingResult}
          handleSelectMessageRecipient={handleSelectMessageRecipient}
        />
      ) : (
        <ChatList
          chats={userChats}
          handleSelectMessageRecipient={handleSelectMessageRecipient}
        />
      )}
    </Users>
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
