import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled(LottieView)`
  background: transparent;
  width: 200px;
  height: 200px;
`;