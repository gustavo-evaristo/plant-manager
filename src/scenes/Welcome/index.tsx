import React from 'react';

import { Container, Image, ButtonStyled, Icon } from './styles';

import { Title, Subtitle } from '../../components';

import Watering from '../../assets/watering.png';


export const Welcome: React.FC = () => (
    <Container>
      <Title />
      <Image source={Watering}/>
      <Subtitle />
      <ButtonStyled small radius={16}>
       <Icon />
      </ButtonStyled>
    </Container>
  );
