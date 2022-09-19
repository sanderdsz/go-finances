import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme";

interface ColorProps {
  isActive: boolean;
  type: "up" | "down";
}

interface IconsProps {
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ColorProps>`
  width: 48%;
  padding: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: none;
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border: none;
    `}
`;

export const Icon = styled(Feather)<IconsProps>`
  margin-right: 12px;

  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
