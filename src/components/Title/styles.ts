import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type Props = {
  color?: string;
  size?: string;
  weight?: string;
  lineHeight?: string;
};

export const Text = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${(props: Props) => (props.size ? props.size : '28px')};
  font-weight: ${(props: Props) => (props.weight ? props.weight : 'bold')};
  text-align: center;
  color: ${(props: Props) => (props.color ? props.color : colors.heading)};
  line-height: ${(props: Props) => (props.lineHeight ? props.lineHeight : '32px')};
`;
