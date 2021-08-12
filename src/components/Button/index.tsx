import React from 'react';
import { Btn } from './styles';

type Props = {
  small?: boolean;
  medium?: boolean;
  disabled?: boolean;
  onPress?: () => void;
};

export const Button: React.FC<Props> = ({ small, medium, disabled, onPress, ...rest }) => {
  return (
    <Btn
      activeOpacity={0.7}
      onPress={onPress}
      {...{
        small,
        medium,
        disabled,
        ...rest,
      }}
    />
  );
};
