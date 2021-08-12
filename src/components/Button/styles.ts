import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { ifStyle } from '@platformbuilders/helpers';

const isSmall = ifStyle('small');
const isMedium = ifStyle('medium');
const isDisabled = ifStyle('disabled');

export const Btn = styled.TouchableOpacity`
  width: ${isSmall('64px', isMedium('98px', '182px'))};
  height: 56px;
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  opacity: ${isDisabled('0.3px', '1px')};
`;
