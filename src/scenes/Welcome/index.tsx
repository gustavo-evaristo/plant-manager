import React from 'react';

import { Container, Image, ButtonStyled, Icon } from './styles';

import { Title, Subtitle } from '../../components';

import Watering from '../../assets/watering.png';

import { useNavigation } from '@react-navigation/native';

export const Welcome: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleNavigation = () => {
    navigation.push('UserIdentification');
  };

  return (
    <Container>
      <Title text={'Gerencie \n suas plantas de \n forma fácil'} />
      <Image source={Watering} />
      <Subtitle
        text={'Não esqueça mais de regar suas \n plantas. Nós cuidamos de lembrar você \n sempre que precisar.'}
      />
      <ButtonStyled onPress={handleNavigation} small>
        <Icon />
      </ButtonStyled>
    </Container>
  );
};
