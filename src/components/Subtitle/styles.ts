import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type Props = {
  color?: string;
  size?: number;
  weight?: string;
  lineHeight?: number;
};

export const Text = styled.Text`
  font-family: ${fonts.text};
  font-size: ${(props: Props) => (props.size ? props.size : 17)};
  font-weight: ${(props: Props) => (props.weight ? props.weight : '400')};
  text-align: center;
  color: ${(props: Props) => (props.color ? props.color : colors.heading)};
  line-height: ${(props: Props) => (props.lineHeight ? props.lineHeight : 25)};
`;
