import React from 'react';
import { Details, Container, Img, Title, Description } from './styles';

import img13 from '../../img/13.png'

export default function Banner(){

  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas cobrancas
        </Description>
      </Details>
      <Img source={img13}/>
    </Container>
  );
};