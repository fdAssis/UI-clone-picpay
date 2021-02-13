import styled from "styled-components/native";
import {  LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
  align-items:center;
  justify-content:center;
  width:60px;
  height:60px;
  border-radius: 30px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({focused}) => focused ? '#000' : '#fff'};
`;



