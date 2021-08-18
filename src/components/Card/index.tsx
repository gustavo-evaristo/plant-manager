import React from 'react';

import { Container, PlantImage, TitlePlant, Wrapper } from './styles';

type Props = {
  image: string;
  title: string;
  onPress?: () => void;
};

export const Card: React.FC<Props> = ({ image, title, onPress, ...rest }) => (
  <Wrapper onPress={onPress}>
    <Container {...{ ...rest }}>
      <PlantImage uri={image} />
      <TitlePlant text={title} />
    </Container>
  </Wrapper>
);
