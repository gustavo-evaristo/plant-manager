import { SvgFromUri } from 'react-native-svg';
import styled from 'styled-components/native';
import { IconBack, InfoCard, Subtitle, Title } from '../../components';

export const Container = styled.SafeAreaView`
  width: 100%;
  align-items: center;
`;

export const Header = styled.View`
  width: 95%;
  height: 80px;
  justify-content: center;
  margin: 0 auto;
`;

export const Icon = styled(IconBack)``;

export const Content = styled.View`
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
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
