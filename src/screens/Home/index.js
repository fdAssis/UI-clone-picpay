import React from 'react';

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from "./styles";

import Suggestions from "../../components/Suggestions";
import Activites from "../../components/Activites";
import Tips from '../../components/Tips';

export default function Home() {
  return (
    <Wrapper>
      <Container> 
        <Header>

          <MaterialCommunityIcons name="qrcode-scan" size={32} color="#10c862" />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />

        </Header>

        <Suggestions />
        <Activites />
        <Tips />
      </Container>
    </Wrapper>
  )

}