import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

type Props = {
  to: boolean;
  secondary: boolean;
};

export const Icon = styled(Feather).attrs((props: Props) => ({
  name: props.to ? 'chevron-right' : 'chevron-left',
  size: 32,
  color: props.secondary ? colors.white : colors.green,
}))``;
