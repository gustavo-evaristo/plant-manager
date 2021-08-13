import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import avatar from '../../assets/avatar.jpg';

import {
  Container,
  StyledHeader,
  Description,
  DescriptionSpan,
  TagButtonStyled,
  TagButtonList,
  WrapperHeader,
  PlantsContainer,
  PlantsContent,
  TagButtonContent,
  CardPlant,
} from './styles';

type EnvironmentsType = {
  key: string;
  title: string;
};

export const PlantSelect: React.FC = () => {
  const [active, setActive] = useState<string>('Todos');
  const [environments, setEnvironments] = useState<EnvironmentsType[]>([]);
  const [plants, setPlants] = useState([]);

  const getEnvironments = async () => {
    const { data } = await api.get('plants_environments');

    setEnvironments([
      {
        key: 'all',
        title: 'Todos',
      },

      ...data,
    ]);
  };

  const getPlants = async () => {
    const { data } = await api.get('plants');

    setPlants(data);
  };

  useEffect(() => {
    getEnvironments();
    getPlants();
  }, []);

  return (
    <Container>
      <WrapperHeader>
        <StyledHeader title={'Olá,'} name={'Gustavo'} avatar={avatar} />
        <Description text={'Em qual ambiente'} />
        <DescriptionSpan text={'você quer colocar sua planta?'} />
      </WrapperHeader>
      <TagButtonList>
        {environments.map((item: EnvironmentsType, id: number) => (
          <TagButtonContent key={id}>
            <TagButtonStyled
              tagName={item.title}
              onPress={() => {
                setActive(item.title);
              }}
              active={active === item.title}
            />
          </TagButtonContent>
        ))}
      </TagButtonList>
      <PlantsContainer>
        <PlantsContent>
          {plants.map((item: any) => (
            <CardPlant key={item.id} image={item.photo} title={item.name} />
          ))}
        </PlantsContent>
      </PlantsContainer>
    </Container>
  );
};
