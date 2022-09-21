import React from "react";
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrors,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container, Error } from "./styles";

interface Props extends TextInputProps {
  control: Control<any>;
  name: string;
  error?: string;
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {!error ? null : <Error>{error}</Error>}
    </Container>
  );
}
