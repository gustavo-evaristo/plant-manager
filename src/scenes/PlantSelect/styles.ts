import styled from 'styled-components/native';
import { Card, Header, Subtitle, TagButton, Title } from '../../components';

export const Container = styled.View`
  width: 100%;
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

export const TagButtonList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: 80px;
  padding-left: 25px;
`;

export const TagButtonContent = styled.View`
  height: 100%;
  justify-content: center;
  margin-horizontal: 1.5px;
`;

export const PlantsContainer = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const PlantsContent = styled.View`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const CardPlant = styled(Card)`
  margin: 10px;
`;
