import styled from "styled-components";

interface IFriendStatus {
  $isonline: boolean;
}

export const FriendListElement = styled.li`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  border: 2px solid #000;
  border-radius: 10px;
`;

export const FriendStatus = styled.span<IFriendStatus>`
  font-size: 20px;
  color: ${(props) => (props.$isonline ? "green" : "red")};
`;

export const FriendAvatar = styled.img`
  padding: 5px 0;
  width: 100px;
  height: 100px;
`;

export const FriendName = styled.p`
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
`;
