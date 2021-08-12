import styled from 'styled-components/native';
import { ifStyle } from '@platformbuilders/helpers';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const isActive = ifStyle('active');
// const isMedium = ifStyle('medium');

export const Btn = styled.TouchableOpacity`
  width: 76px;
  height: 40px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background: ${isActive(colors.green_light, colors.shape)};
`;

export const TextButton = styled.Text`
  color: ${isActive(colors.green, colors.heading)};
  font-family: ${isActive(fonts.heading, fonts.text)};
  font-size: 14px;
`;
