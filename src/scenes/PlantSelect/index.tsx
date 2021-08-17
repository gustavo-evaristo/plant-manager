import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import avatar from '../../assets/avatar.jpg';
import { Load } from '../../components';
import { getStore } from '../../store';

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
  TagButtonContainer,
  CardPlant,
} from './styles';

type EnvironmentsType = {
  key: string;
  title: string;
};

type Plants = {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
};

export const PlantSelect: React.FC = () => {
  const [active, setActive] = useState<string>('all');
  const [environments, setEnvironments] = useState<EnvironmentsType[]>([]);
  const [plants, setPlants] = useState<Plants[]>([]);
  const [filtered, setFiltered] = useState<Plants[]>(plants);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string>('');

  const handleUsername = async () => {
    setUsername(await getStore('@plantmanager:username'));
  };

  const getEnvironments = async () => {
    const { data } = await api.get('plants_environments?_sort=title');

    setEnvironments([
      {
        key: 'all',
        title: 'Todos',
      },

      ...data,
    ]);
  };

  const getPlants = async () => {
    const { data } = await api.get('plants?_sort=name');

    setPlants(data);
    setFiltered(data);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const handleEnvironments = (environment: string) => {
    setActive(environment);

    if (environment === 'all') return setFiltered(plants);

    const filteredPlants = plants.filter((plant) => plant.environments.includes(environment));

    setFiltered(filteredPlants);
  };

  useEffect(() => {
    getEnvironments();
    handleUsername();
    getPlants();
  }, []);

  if (loading) return <Load />;

  return (
    <Container>
      <WrapperHeader>
        <StyledHeader title={'Olá,'} name={username} avatar={avatar} />
        <Description text={'Em qual ambiente'} />
        <DescriptionSpan text={'você quer colocar sua planta?'} />
      </WrapperHeader>
      <TagButtonContainer>
        <TagButtonList>
          {environments.map((item: EnvironmentsType, id: number) => (
            <TagButtonContent key={id}>
              <TagButtonStyled
                tagName={item.title}
                onPress={() => handleEnvironments(item.key)}
                active={active === item.key}
              />
            </TagButtonContent>
          ))}
        </TagButtonList>
      </TagButtonContainer>
      <PlantsContainer>
        <PlantsContent
          data={filtered}
          renderItem={({ item }: any) => <CardPlant key={item.id} image={item.photo} title={item.name} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </PlantsContainer>
    </Container>
  );
};
