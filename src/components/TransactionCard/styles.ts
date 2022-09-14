import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionProps {
  type: "positive" | "negative";
}

export const Container = styled(View)`
  padding: 17px 24px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled(Text)<TransactionProps>`
  margin-top: 2px;

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Category = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;

  margin-left: 17px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const Date = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;
