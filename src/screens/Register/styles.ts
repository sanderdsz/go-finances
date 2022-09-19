import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(View)`
  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const Form = styled(View)`
  flex: 1;
  justify-content: space-between;

  width: 100%;
  padding: 24px;
`;

export const Fields = styled(View)``;

export const TransactionsTypes = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0px;
  margin-bottom: 8px;
`;

export const Modal = styled(View)``;
