import React from 'react';

import { Text } from './styles';

type Props = {
  text: string;
  color?: string;
  size?: string;
  weight?: string;
  lineHeight?: string;
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
