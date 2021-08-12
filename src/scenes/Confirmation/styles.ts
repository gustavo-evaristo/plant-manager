import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { Title, Button, Subtitle } from '../../components';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  width: 100%;
`;

export const TitleStyled = styled(Title)``;

export const Description = styled(Subtitle)`
  padding: 10px 20px;
`;

export const Icon = styled.Text`
  font-size: 80px;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`;
