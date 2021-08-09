import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Text } from "react-native";

import { Btn } from './styles';

type Props = {
    opacity?: number
    height?: number
}

export const Button: React.FC<Props> = ({ opacity, height, ...rest }) => {
    return (
        <Btn {...{
            opacity,
            height,
            ...rest
        }}>
            <Text style={{color: '#fff'}}>{'>'}</Text>
        </Btn>
    );
}