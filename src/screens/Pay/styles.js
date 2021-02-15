import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled.View`
 flex-direction: row;
 height: 70px;
 background: rgba(255, 255, 255, 0.9);
 padding: 0 16px;
 align-items: center;
 justify-content: space-between;
`;

export const SeachPaymentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 10px;
  border: 1px solid #868686;
  border-radius: 15px;
  margin-left: 25px;  
`;

export const SearchPaymentInput = styled.TextInput`
  flex: 1;
  color: #1ab563;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 100;
`;