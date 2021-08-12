import React, { useState } from 'react';

import avatar from '../../assets/avatar.jpg';

import {
  Container,
  StyledHeader,
  Description,
  DescriptionSpan,
  TagButtonStyled,
  TagButtonList,
  WrapperHeader,
} from './styles';

export const PlantSelect: React.FC = () => {
  const [active, setActive] = useState<string>('Sala');
  return (
    <Container>
      <WrapperHeader>
        <StyledHeader title={'Olá,'} name={'Gustavo'} avatar={avatar} />
        <Description text={'Em qual ambiente'} />
        <DescriptionSpan text={'você quer colocar sua planta?'} />
      </WrapperHeader>
      <TagButtonList>
        <TagButtonStyled tagName="Sala" onPress={() => setActive('Sala')} active={active === 'Sala'} />
        <TagButtonStyled tagName="Quarto" onPress={() => setActive('Quarto')} active={active === 'Quarto'} />
        <TagButtonStyled tagName="Cozinha" onPress={() => setActive('Cozinha')} active={active === 'Cozinha'} />
        <TagButtonStyled tagName="Banheiro" onPress={() => setActive('Banheiro')} active={active === 'Banheiro'} />
        <TagButtonStyled tagName="Jardim" onPress={() => setActive('Jardim')} active={active === 'Jardim'} />
      </TagButtonList>
    </Container>
  );
};
