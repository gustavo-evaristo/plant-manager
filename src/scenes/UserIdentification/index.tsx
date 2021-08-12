import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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
  Header,
} from './styles';

export const UserIdentification: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>();

  const handleFocus = () => setActive(true);

  const handleBlur = () => !textValue && setActive(false);

  const handleText = (values: string) => setTextValue(values);

  const navigation = useNavigation<any>();

  const handleSubmit = () => {
    navigation.push('Confirmation');
  };

  return (
    <Container>
      <KeyboardAvoidingViewStyled>
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
              onChangeText={(values) => handleText(values)}
            />
            <StyledButton radius={'16px'} height={56} onPress={handleSubmit}>
              <TextButton>Confirmar</TextButton>
            </StyledButton>
          </Form>
        </Content>
      </KeyboardAvoidingViewStyled>
    </Container>
  );
};
