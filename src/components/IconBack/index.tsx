import React from 'react';

import { Icon } from './styles';

type Props = {
  right?: boolean;
  secondary?: boolean;
  onPress: () => void;
};

export const IconBack: React.FC<Props> = ({ right, secondary, onPress, ...rest }) => (
  <Icon
    onPress={onPress}
    {...{
      right,
      secondary,
      ...rest,
    }}
  />
);
