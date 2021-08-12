import React from 'react';
import { Btn } from './styles';

type Props = {
  activeOpacity?: number;
  height?: string;
  small?: boolean;
  medium?: boolean;
  radius?: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const Button: React.FC<Props> = ({ height, small, medium, radius, disabled, onPress, ...rest }) => {
  return (
    <Btn
      activeOpacity={0.7}
      onPress={onPress}
      {...{
        height,
        small,
        medium,
        radius,
        disabled,
        ...rest,
      }}
    />
  );
};
