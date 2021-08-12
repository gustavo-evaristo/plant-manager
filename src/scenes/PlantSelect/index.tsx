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

  const items: string[] = ['Sala', 'Quarto', 'Cozinha', 'Banheiro', 'Jardim'];

  return (
    <Container>
      <WrapperHeader>
        <StyledHeader title={'Olá,'} name={'Gustavo'} avatar={avatar} />
        <Description text={'Em qual ambiente'} />
        <DescriptionSpan text={'você quer colocar sua planta?'} />
      </WrapperHeader>
      <TagButtonList>
        {items.map((item: string, id: number) => (
          <TagButtonStyled key={id} tagName={item} onPress={() => setActive(item)} active={active === item} />
        ))}
      </TagButtonList>
    </Container>
  );
};
