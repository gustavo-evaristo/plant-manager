/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import Waterdrop from '../../assets/waterdrop.png';
import { Card, Container, Content, Description, Header, Icon, PlantImage, PlantName } from './styles';

type Props = {
  plant: {
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
};

export const PlantRegister: React.FC = () => {
  const navigation = useNavigation<any>();

  const back = () => navigation.pop();

  const route = useRoute();

  const { plant } = route.params as Props;

  return (
    <Container>
      <Header>
        <Icon onPress={back} />
      </Header>
      <Content>
        <PlantImage uri={plant.photo} />
        <PlantName text={plant.name} />
        <Description text={plant.about} />
        <Card text={plant.water_tips} image={Waterdrop} />
      </Content>
    </Container>
  );
};
