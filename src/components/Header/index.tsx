import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Avatar, Container, Content, TitleName, TitleStyled } from './styles';

type Props = {
  name: string;
  avatar: ImageSourcePropType;
  title?: string;
};

export const Header: React.FC<Props> = ({ name, avatar, title, ...rest }) => (
  <Container {...{ ...rest }}>
    <Content>
      <TitleStyled text={title} />
      <TitleName text={name} />
    </Content>

    <Avatar source={avatar} />
  </Container>
);
