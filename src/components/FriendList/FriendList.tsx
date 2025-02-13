import FriendListItem from "../FriendListItem/FriendListItem";
import * as Styled from "./styled";

interface IFriend {
  id: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}

interface IFriendList {
  friends: Array<IFriend>;
}

const FriendList = ({ friends }: IFriendList) => (
  <Styled.FriendListStyled>
    {friends.map((friend) => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </Styled.FriendListStyled>
);

export default FriendList;
