import React from 'react';

import { Container, Option, Img, Label } from "./styles";

import img1 from "../../img/01.png";
import img2 from "../../img/02.png";
import img3 from "../../img/03.png";
import img4 from "../../img/04.png";
import img5 from "../../img/05.png";
import img6 from "../../img/06.png";
import img7 from "../../img/07.png";

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: "Doacoes"
  },
  {
    key: String(Math.random()),
    img: img2,
    label: "Uber"
  }, 
  {
    key: String(Math.random()),
    img: img3,
    label: "Busao"
  }, 
  {
    key: String(Math.random()),
    img: img4,
    label: "Sky"
  }, 
  {
    key: String(Math.random()),
    img: img5,
    label: "Doacoes"
  }, 
  {
    key: String(Math.random()),
    img: img6,
    label: "Doacoes"
  }, 
  {
    key: String(Math.random()),
    img: img7,
    label: "Doacoes"
  },  

]

export default function Suggestions(){
  return(
    <Container>
      {items.map((item) => (
        <Option key={item.key}>
          <Img source={item.img}/>
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  )

};