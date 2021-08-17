import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Watering from '../../assets/watering.png';
import { Subtitle, Title } from '../../components';
import { getStore } from '../../store';
import { ButtonStyled, Container, Icon, Image } from './styles';

export const Welcome: React.FC = () => {
  const [logged, setLogged] = useState<boolean>(false);

  const navigation = useNavigation<any>();

  const handleNavigation = () => {
    logged ? navigation.push('PlantSelect') : navigation.push('UserIdentification');
  };

  const handleLogged = async () => {
    setLogged(!!(await getStore('@plantmanager:username')));
  };

  useEffect(() => {
    handleLogged();
  }, []);

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
