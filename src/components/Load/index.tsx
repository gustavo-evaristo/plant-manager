import React from 'react';
import { Container, Animation } from './styles';

import loadAnimation from '../../assets/load.json';

export const Load: React.FC = () => (
  <Container>
    <Animation source={loadAnimation} autoPlay loop />
  </Container>
);
