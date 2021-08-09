import styled from 'styled-components/native';
import colors from '../../styles/colors';

// type Props = {
//     opacity: number;
// }

export const Btn = styled.TouchableOpacity.attrs((props) => ({
    activeOpacity: props.opacity ? props.opacity : 0.8,
}))`
    width: 56px;
    height: 56px;
    background: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
`;
