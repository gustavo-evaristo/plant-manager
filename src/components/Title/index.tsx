import React from 'react';

import { Text } from './styles';

type Props = {
  text: string;
  color?: string;
  size?: number;
  weight?: string;
  lineHeight?: number;
};

export const Title: React.FC<Props> = ({ text, color, size, weight, lineHeight, ...rest }) => (
  <Text
    {...{
      text,
      color,
      size,
      weight,
      lineHeight,
      ...rest,
    }}
  >
    {text}
  </Text>
);
