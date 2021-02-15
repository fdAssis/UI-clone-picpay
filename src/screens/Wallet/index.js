import React from 'react';
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {Switch} from 'react-native'; 
import { 
  Wrapper, 
  Header, 
  HeaderContainer, 
  Title, 
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
 } from './styles';


export default function Home(){
  return (
    <Wrapper>
      <Header colors={['#52E78c', '#1ab563']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          
          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>
            
            <EyeButton>
              <Feather name="eye" size={30} color='#FFF'/>
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo esta rendendo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#FFF"/>
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <MaterialCommunityIcons name="bank" size={20} color="#FFF"/>
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>

        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>
          Usar saldo ao pagar
        </UseBalanceTitle>
        <Switch />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de Pagamento
        </PaymentMethodsTitle>
      </PaymentMethods>

    </Wrapper>
  )
}