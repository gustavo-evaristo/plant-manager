import React from 'react';
import { Text } from 'react-native';

import { Container, Image } from './styles';

import { Title, Subtitle, Button } from '../../components';

import Watering from '../../assets/watering.png';

export const Welcome: React.FC = () => (
    <Container>
      <Title />
      <Image source={Watering}/>
      <Subtitle />
      <Button opacity={ 0.1 }>
        <Text>{'>'}</Text>
      </Button>
    </Container>
  );
