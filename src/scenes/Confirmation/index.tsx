import React from 'react';

import { Container, Description, TitleStyled, Icon, StyledButton, TextButton } from './styles';

export const Confirmation: React.FC = () => {
  return (
    <Container>
      <Icon>😉</Icon>
      <TitleStyled text={'Prontinho'} />
      <Description text={'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.'} />
      <StyledButton radius={'16px'} height={56}>
        <TextButton>Confirmar</TextButton>
      </StyledButton>
    </Container>
  );
};
