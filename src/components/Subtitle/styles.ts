import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Text = styled.Text`
    font-family: ${fonts.text};
    text-align: center;
    font-size: 16;
    padding: 0 20px;
    color: ${colors.heading};
`;