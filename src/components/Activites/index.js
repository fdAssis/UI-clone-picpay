import React from "react";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../img/avatar.png'
import { Feather, FontAwesome5 } from '@expo/vector-icons';

export default function Activites() {
  return (
    <Container>

      <Header>
        <Title>Atividade</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Voce</Bold> pagou a <Bold>@Francisco</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Francisco de Assis</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
            <Feather name="lock" size={15} color="#fff" />
            <Date>Ha 2 anos</Date>
          </Details>

          <Actions>
            <Option>
              <FontAwesome5 name="comment-alt" size={15} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <FontAwesome5 name="heart" size={15} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>

          </Actions>

        </CardFooter>


      </Card>

    </Container>
  )
}
