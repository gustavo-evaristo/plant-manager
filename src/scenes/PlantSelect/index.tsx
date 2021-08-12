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
} from './styles';

type PlantsEnvironmentType = {
  key: string;
  title: string;
};

export const PlantSelect: React.FC = () => {
  const [active, setActive] = useState<string>('Todos');

  const [plantsEnvironments, setPlantsEnvironments] = useState<PlantsEnvironmentType[]>([]);

  const fetchPlantsEnvironments = async () => {
    const { data } = await api.get('/plants_environments');

    setPlantsEnvironments([
      {
        key: 'all',
        title: 'Todos',
      },

      ...data,
    ]);
  };

  useEffect(() => {
    fetchPlantsEnvironments();
  }, []);

  return (
    <Container>
      <WrapperHeader>
        <StyledHeader title={'Olá,'} name={'Gustavo'} avatar={avatar} />
        <Description text={'Em qual ambiente'} />
        <DescriptionSpan text={'você quer colocar sua planta?'} />
      </WrapperHeader>
      <TagButtonList>
        {plantsEnvironments.map((item: PlantsEnvironmentType, id: number) => (
          <TagButtonStyled
            key={id}
            tagName={item.title}
            onPress={() => {
              setActive(item.title);
            }}
            active={active === item.title}
          />
        ))}
      </TagButtonList>
    </Container>
  );
};
