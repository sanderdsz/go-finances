import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  padding: 18px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Category = styled(Text)`
  font-size: ${RFValue(14)}px;
`;
