import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps {
  color: string;
}

export const Container = styled(View)<ContainerProps>`
  width: 100%;
  padding: 13px 24px;
  margin-bottom: 8px;

  flex-direction: row;
  justify-content: space-between;

  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const Amount = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
`;
