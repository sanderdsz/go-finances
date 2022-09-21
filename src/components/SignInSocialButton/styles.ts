import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;
  margin-bottom: 16px;

  align-items: center;
  flex-direction: row;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ImageContainer = styled(View)`
  height: 100%;
  padding: ${RFValue(16)}px;

  justify-content: center;
  align-items: center;

  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;
`;

export const Title = styled(Text)`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
