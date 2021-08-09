import styled from 'styled-components/native';
import colors from '../../styles/colors';

type Props = {
    height?: number;
    opacity?: number;
}

export const Btn = styled.TouchableOpacity.attrs((props: Props) => ({
    activeOpacity: props.opacity ? props.opacity : 0.9,
}))`
    width: 56px;
    height: ${(props: Props) => props.height ? `${props.height}px` : '56px'};
    background: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
`;
