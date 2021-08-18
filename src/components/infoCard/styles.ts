import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Card = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
`;

export const Image = styled.Image`
  width: 56px;
  height: 56px;
`;

export const Description = styled.Text`
  flex: 1;
  margin-left: 25px;
  font-size: 17px;
  text-align: left;
  color: ${colors.blue};
  font-family: ${fonts.text};
`;
