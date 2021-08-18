import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Card, Description, Image } from './styles';

type Props = {
  image: ImageSourcePropType;
  text: string;
};

export const InfoCard: React.FC<Props> = ({ image, text, ...rest }) => (
  <Card
    {...{
      text,
      ...rest,
    }}
  >
    <Image source={image} />
    <Description>{text}</Description>
  </Card>
);
