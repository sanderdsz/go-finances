import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Category, Container, Icon } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Container activeOpacity={0.7} onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
