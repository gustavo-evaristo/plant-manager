import React from 'react';

import { Container, PlantImage, TitlePlant } from './styles';

type Props = {
  image: string;
  title: string;
};

export const Card: React.FC<Props> = ({ image, title, ...rest }) => (
  <Container {...{ ...rest }}>
    <PlantImage uri={image} />
    <TitlePlant text={title} />
  </Container>
);
