import React from 'react';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {
  Wrapper, 
  Header, 
  SeachPaymentContainer,
  SearchPaymentInput,
} from './styles';

export default function Home(){
  
  return (
    <Wrapper>
      <Header>
        
        <MaterialCommunityIcons name="qrcode-scan" size={32} color="#10c862" />
        
        <SeachPaymentContainer>
          <Feather name="search" size={20} color="#868686" />
          <SearchPaymentInput
            placeholder="Quem voce quer pagar?"
            placeholderTextColor="#868686"
          >

          </SearchPaymentInput>
        </SeachPaymentContainer>
      </Header>
    </Wrapper>
  )
}
