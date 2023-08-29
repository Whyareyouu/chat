import React, { FC } from "react";
import { Settings, StyledSidebar, Users } from "./Sidebar.styles";
import {
  getIsSearchingBool,
  getSearchResult,
  SearchingUser,
} from "features/SearchingUsers";
import { useSelector } from "react-redux";
import { getAllUserChats } from "widgets/Sidebar/model/selectors/getAllUserChats";
import { ChatList } from "widgets/Sidebar/ui/ChatList/ChatList";
import { SearchResultList } from "widgets/Sidebar/ui/SearchResultList/SearchResultList";
import { BurgerMenu } from "features/BurgetMenu";
import { UserProfile } from "features/UserProfile";

interface SidebarProps {
  handleSelectMessageRecipient: (recipientId: string) => void;
}

export const Sidebar: FC<SidebarProps> = ({ handleSelectMessageRecipient }) => {
  const isSearching = useSelector(getIsSearchingBool);
  const searchingResult = useSelector(getSearchResult);
  const userChats = useSelector(getAllUserChats);

  return (
    <StyledSidebar>
      <Settings>
        <BurgerMenu />
        <SearchingUser />
      </Settings>
      <UserProfile />
      {/*<Users>*/}
      {/*  {isSearching ? (*/}
      {/*    <SearchResultList*/}
      {/*      searchResult={searchingResult}*/}
      {/*      handleSelectMessageRecipient={handleSelectMessageRecipient}*/}
      {/*    />*/}
      {/*  ) : (*/}
      {/*    <ChatList*/}
      {/*      chats={userChats}*/}
      {/*      handleSelectMessageRecipient={handleSelectMessageRecipient}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</Users>*/}
    </StyledSidebar>
  );
};
