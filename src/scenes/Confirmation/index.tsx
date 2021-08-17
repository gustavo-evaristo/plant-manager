import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Description, Icon, StyledButton, TextButton, TitleStyled } from './styles';

export const Confirmation: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleNavigation = () => {
    navigation.push('PlantSelect');
  };

  return (
    <Container>
      <Icon>😉</Icon>
      <TitleStyled text={'Prontinho'} />
      <Description text={'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.'} />
      <StyledButton onPress={handleNavigation}>
        <TextButton>Confirmar</TextButton>
      </StyledButton>
    </Container>
  );
};
