import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Subtitle, Title } from '../';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
  align-items: flex-start;

  justify-content: center;
`;

export const TitleStyled = styled(Subtitle)`
  font-size: 32px;
  margin-bottom: -10px;
`;

export const TitleName = styled(Title)`
  font-size: 32px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
