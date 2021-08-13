import styled from 'styled-components/native';
import { Card, Header, Subtitle, TagButton, Title } from '../../components';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const WrapperHeader = styled.View`
  width: 85%;
  margin: 0 auto;
`;

export const StyledHeader = styled(Header)`
  padding: 20px 0;
`;

export const Description = styled(Title)`
  margin-top: 20px;
  font-size: 17px;
  text-align: left;
`;

export const DescriptionSpan = styled(Subtitle)`
  text-align: left;
  margin-bottom: 15px;
`;

export const TagButtonStyled = styled(TagButton)``;

export const TagButtonContainer = styled.View`
  width: 100%;
  height: 50px;
  margin-vertical: 10px;
`;

export const TagButtonList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: 100%;
  padding-left: 25px;
`;

export const TagButtonContent = styled.View`
  height: 100%;
  justify-content: center;
  margin-horizontal: 2px;
`;

export const PlantsContent = styled.FlatList``;

export const PlantsContainer = styled.View`
  padding-horizontal: 20px;
  justify-content: center;
  flex: 1;
`;

export const CardPlant = styled(Card)`
  margin: 10px;
`;
