import React from "react";

import { Text } from "react-native";

import { Btn } from './styles';

export const Button: React.FC = () => {
    return (
        <Btn opacity={0.2}>
            <Text style={{color: '#fff'}}>{'>'}</Text>
        </Btn>
    );
}