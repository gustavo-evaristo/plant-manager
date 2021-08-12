import React from 'react';
import { Btn } from './styles';

type Props = {
  activeOpacity?: number;
  height?: string;
  small?: boolean;
  medium?: boolean;
  radius?: string;
  background?: string;
  onPress?: () => void;
};

export const Button: React.FC<Props> = ({
  activeOpacity,
  height,
  small,
  medium,
  radius,
  background,
  onPress,
  ...rest
}) => {
  return (
    <Btn
      onPress={onPress}
      {...{
        activeOpacity,
        height,
        small,
        medium,
        radius,
        background,
        ...rest,
      }}
    />
  );
};
