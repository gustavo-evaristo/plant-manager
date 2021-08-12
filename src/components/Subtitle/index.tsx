import React from 'react';

import { Text } from './styles';

type Props = {
  text: string;
  color?: string;
  size?: string;
  weight?: string;
};

export const Subtitle: React.FC<Props> = ({ text, color, size, weight, ...rest }) => (
  <Text
    {...{
      text,
      color,
      size,
      weight,
      ...rest,
    }}
  >
    {text}
  </Text>
);
