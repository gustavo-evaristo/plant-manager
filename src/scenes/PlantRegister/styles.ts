import { SvgFromUri } from 'react-native-svg';
import styled from 'styled-components/native';
import { IconBack, InfoCard, Subtitle, Title } from '../../components';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  width: 100%;
  background: ${colors.shape}
  flex: 1;
`;

export const Header = styled.View`
  width: 95%;
  padding: 15px;
  justify-content: center;
`;

export const Icon = styled(IconBack)``;

export const Content = styled.View`
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;

export const PlantImage = styled(SvgFromUri).attrs({
  width: 300,
  height: 200,
})`
  margin-top: -30px;
`;

export const PlantName = styled(Title)``;

export const Description = styled(Subtitle)`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Card = styled(InfoCard)``;
