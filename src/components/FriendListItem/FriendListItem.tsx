import * as Styled from "./styled";

interface IFriendListItem {
  avatar: string;
  name: string;
  isOnline: boolean;
}

const FriendListItem = ({ avatar, name, isOnline }: IFriendListItem) => (
  <Styled.FriendListElement>
    <Styled.FriendAvatar src={avatar} alt="User avatar" width="48" />
    <Styled.FriendName>{name}</Styled.FriendName>
    <Styled.FriendStatus $isonline={isOnline}>
      {isOnline ? "Online" : "Offline"}
    </Styled.FriendStatus>
  </Styled.FriendListElement>
);

export default FriendListItem;
