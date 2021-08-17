import { KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Button, Title } from '../../components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type Props = {
  active?: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background: ${colors.white};
  width: 100%;
`;

export const KeyboardAvoidingViewStyled = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background: ${colors.white};
  width: 100%;
`;

export const TouchableWithoutFeedbackStyled = styled.TouchableWithoutFeedback`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 80%;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Form = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 54px 0px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${(props: Props) => (props.active ? colors.green : colors.gray)};
  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const TitleStyled = styled(Title)``;

export const Icon = styled.Text`
  font-size: 80px;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
  height: 56px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`;
