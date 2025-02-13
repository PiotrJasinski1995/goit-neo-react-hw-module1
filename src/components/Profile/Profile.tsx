import * as Styled from "./styled";

interface IProfile {
  name: string;
  tag: string;
  location: string;
  image: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

const Profile = ({ name, tag, location, image, stats }: IProfile) => (
  <Styled.ProfileContainer>
    <Styled.Description className="description">
      <Styled.Avatar src={image} alt="User avatar" />
      <Styled.Name>{name}</Styled.Name>
      <Styled.Tag>@{tag}</Styled.Tag>
      <Styled.Location>{location}</Styled.Location>
    </Styled.Description>

    <Styled.Statistics>
      <Styled.Statistic>
        <span>Followers</span>
        <Styled.StatisticNumber>{stats.followers}</Styled.StatisticNumber>
      </Styled.Statistic>
      <Styled.Statistic>
        <span>Views</span>
        <Styled.StatisticNumber>{stats.views}</Styled.StatisticNumber>
      </Styled.Statistic>
      <Styled.Statistic>
        <span>Likes</span>
        <Styled.StatisticNumber>{stats.likes}</Styled.StatisticNumber>
      </Styled.Statistic>
    </Styled.Statistics>
  </Styled.ProfileContainer>
);

export default Profile;
