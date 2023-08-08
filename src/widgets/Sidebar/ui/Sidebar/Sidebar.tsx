import React from "react";
import { StyledSidebar, Users } from "./Sidebar.styles";
import { getSearchedUsers, SearchingUser } from "features/SearchingUsers";
import { useSelector } from "react-redux";
import { ShortUserProfile } from "shared/ui/ShortUserProfile/ShortUserProfile";

export const Sidebar = () => {
  const foundUsers = useSelector(getSearchedUsers);
  return (
    <StyledSidebar>
      <SearchingUser />
      <Users>
        {foundUsers &&
          foundUsers.map((user) => (
            <ShortUserProfile key={user.id} username={user.username} />
          ))}
      </Users>
    </StyledSidebar>
  );
};
