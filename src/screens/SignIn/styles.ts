import { View, Text } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
`;

export const Header = styled(View)`
  width: 100%;
  height: 70%;

  justify-content: flex-end;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TitleWrapper = styled(View)`
  align-items: center;
`;

export const Title = styled(Text)`
  margin-top: 45px;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const SignInTitle = styled(Text)`
  margin-top: 80px;
  margin-bottom: 67px;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Footer = styled(View)`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterWrapper = styled(View)`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
  justify-content: space-between;
`;
