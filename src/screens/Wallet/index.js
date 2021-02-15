import React, {useState} from 'react';
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
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
 } from './styles';

 import creditCard from '../../img/credit-card.png'

export default function Home(){

  const [isVisible, setSivible] = useState(true);
  const [useBalance, setUseBalance] = useState(true)

  function handleToggleVisibility(){
    setSivible((prevState) => !prevState);
  }

  function handleUseBalance(){
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header 
        colors={
          useBalance
          ? ['#52E78c', '#1ab563']
          : ['#d3d3d3', '#868686']
        }>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "00,00" : "----"}</Bold>
            </Value>
            
            <EyeButton onPress={handleToggleVisibility}>
               <Feather name={isVisible ? "eye" : "eye-off"} size={30} color='#FFF'/>     
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
        <Switch 
          value={useBalance}
          onValueChange={handleUseBalance}
          thumbColor={useBalance ? "#0DB060" : "#868686" }

        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de Pagamento
        </PaymentMethodsTitle>


        <Card>
          <CardBody> 
            <CardDetails>
              <CardTitle>
                Cadastre seu cartao de credito
              </CardTitle>
              <CardInfo>
                Cadastre seu cartao de credito para poder fazer pagamentos mesmo
                quando nao tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain"/>
          </CardBody>

          <AddButton>
            <Feather name="plus-circle" size={30} color="#0DB060"/>
            <AddLabel>
              Adicionar Cartao de credito
            </AddLabel>
          </AddButton>

        </Card>
      </PaymentMethods>

      <UseTicketContainer>
        <UseTicketButton>
          <Feather name="dollar-sign" size={20} color="#0DB060" />
          <UseTicketLabel>Usar codigo promocional</UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>

    </Wrapper>
  )
}