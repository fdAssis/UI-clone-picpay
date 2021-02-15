import React from 'react';
import {
  Wrapper,
  SuggestionsContainer,
  NextForUse,
  NetForUseTitle,
  Card,
  Img,
  CardDetails,
  Bold,
  CardInfo,

} from './styles';

import avatar from '../../img/avatar.png'

import Suggestions from '../Suggestions';

export default function TabInitial(){
  return (
    <Wrapper> 
      <SuggestionsContainer>
        <Suggestions />
      </SuggestionsContainer>
      

      <NextForUse>
        <NetForUseTitle>
          Proximos de Voce
        </NetForUseTitle>
        <Card>
          <Img source={avatar}/>
          <CardDetails>
            <Bold>Comercio Jr</Bold>
            <CardInfo>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Fugiat rerum eaque molestiae facere nemo, eius minus? 
              Voluptates quod facilis, voluptate soluta recusandae 
              totam non eligendi sunt ipsa, nam a doloribus?
            </CardInfo> 
          </CardDetails>
        </Card>
      </NextForUse>


    </Wrapper>
  )
}

