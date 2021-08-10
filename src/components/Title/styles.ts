import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Text = styled.Text`
    font-family: ${fonts.heading};
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    color: ${colors.heading};
    line-height: 32;
`;