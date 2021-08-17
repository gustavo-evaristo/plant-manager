import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { Button } from '../../components';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background: ${colors.white};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const ButtonStyled = styled(Button)``;

export const Icon = styled(Feather).attrs({
  name: 'chevron-right',
  size: 32,
  color: colors.white,
})``;
