import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

export function TransactionButton({ title, type, isActive, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon type={type} name={icons[type]}></Icon>
      <Title>{title}</Title>
    </Container>
  );
}
