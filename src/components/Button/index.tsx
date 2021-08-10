import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Text } from "react-native";

import { Btn } from './styles';

type Props = {
    activeOpacity?: number;
    height?: number;
    small?: boolean;
    medium?: boolean;
    radius?: number;
    background?: string;
}

export const Button: React.FC<Props> = ({ activeOpacity, height, small, medium, radius, background, ...rest }) => {
    return (
        <Btn {...{
            activeOpacity,
            height,
            small,
            medium,
            radius,
            background,
            ...rest
        }}>
            <Text style={{color: '#fff'}}>{'>'}</Text>
        </Btn>
    );
}