import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { ifStyle } from '@platformbuilders/helpers'

type Props = {
    height?: number;
    activeOpacity?: number;
    radius?: number;
    background?: string;
}

const isSmall = ifStyle('small')
const isMedium = ifStyle('medium')

export const Btn = styled.TouchableOpacity.attrs((props: Props) => ({
    activeOpacity: props.activeOpacity ? props.activeOpacity : 0.9,
}))`
    width: ${isSmall(64, isMedium(98, 124))};
    height: ${(props: Props) => props.height ? props.height : '64px'}
    background: ${(props: Props) => props.background ? props.background : colors.green};
    justify-content: center;
    align-items: center;
    border-radius: ${(props: Props) => props.radius ? props.radius : 0};
`;
