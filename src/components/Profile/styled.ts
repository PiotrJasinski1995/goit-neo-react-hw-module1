import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin: 20px auto;
  width: 300px;
  background-color: #f7f7f7;
  border: 2px solid #000;
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Tag = styled.p`
  color: grey;
`;

export const Location = styled.p`
  color: grey;
`;

export const Statistics = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Statistic = styled.li`
  width: 100px;
  height: 100px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa5a5;
`;

export const StatisticNumber = styled.span`
  font-weight: bold;
`;
