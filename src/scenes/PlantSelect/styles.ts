import styled from 'styled-components/native';
import { Header, Subtitle, TagButton, Title } from '../../components';

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
  margin-top: 30px;
  font-size: 17px;
  text-align: left;
`;

export const DescriptionSpan = styled(Subtitle)`
  text-align: left;
`;

export const TagButtonStyled = styled(TagButton)`
  margin: 3px 2px;
`;

export const TagButtonList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  padding: 20px 0 0 25px;
`;
