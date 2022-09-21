import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

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

export const Content = styled(ScrollView)``;

export const ChartContainer = styled(View)`
  width: 100%;
  align-items: center;
`;

export const MonthSelect = styled(View)`
  width: 100%;
  margin-top: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MonthSelectButton = styled(TouchableOpacity)``;

export const SelectIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const Month = styled(Text)`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LoadContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
