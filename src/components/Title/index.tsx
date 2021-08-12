import React from 'react';

import { Text } from './styles';

type Props = {
  text: string;
  color?: string;
  size?: string;
  weight?: string;
  font?: string;
};

export const Title: React.FC<Props> = ({ text, color, size, weight, font, ...rest }) => (
  <Text
    {...{
      text,
      color,
      size,
      weight,
      font,
      ...rest,
    }}
  >
    {text}
  </Text>
);
