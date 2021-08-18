import { SvgFromUri } from 'react-native-svg';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { Title } from '../Title';

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Container = styled.View`
  width: 150px;
  height: 155px;
  background: ${colors.shape};
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
`;

export const PlantImage = styled(SvgFromUri).attrs({
  width: 100,
  height: 100,
})``;

export const TitlePlant = styled(Title)`
  font-size: 13px;
`;
