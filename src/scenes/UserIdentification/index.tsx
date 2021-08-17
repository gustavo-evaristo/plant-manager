import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { setStore } from '../../store';

import {
  Container,
  Content,
  Form,
  Input,
  TitleStyled,
  Icon,
  StyledButton,
  TextButton,
  KeyboardAvoidingViewStyled,
  TouchableWithoutFeedbackStyled,
  Header,
} from './styles';

import { Keyboard } from 'react-native';

const UserIdentification: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [name, setName] = useState<string>();

  const handleFocus = () => setActive(true);

  const handleBlur = () => !name && setActive(false);

  const navigation = useNavigation<any>();

  const handleSubmit = async () => {
    navigation.push('Confirmation');

    await setStore('@plantmanager:username', name);
  };

  return (
    <Container>
      <KeyboardAvoidingViewStyled>
        <TouchableWithoutFeedbackStyled onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Icon> {active ? '😄' : '😃'}</Icon>
                <TitleStyled text={'Como podemos \n chamar você?'} />
              </Header>
              <Input
                active={active}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={(values: string) => setName(values)}
              />
              <StyledButton onPress={() => name && handleSubmit()} disabled={!name}>
                <TextButton>Confirmar</TextButton>
              </StyledButton>
            </Form>
          </Content>
        </TouchableWithoutFeedbackStyled>
      </KeyboardAvoidingViewStyled>
    </Container>
  );
};

export default UserIdentification;
