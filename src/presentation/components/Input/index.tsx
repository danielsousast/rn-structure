import React from "react";
import * as S from "./styles";
import { TextInputProps, View } from "react-native";

/**
 * @params mt - margin-top
 * @params mb - margin-bottom
 */
interface InputProps extends TextInputProps {
  mt?: number;
  mb?: number;
  label?: string;
  half?: boolean;
}

export function Input({ mt, mb, label, half, ...inputProps }: InputProps) {
  return (
    <View>
      {label && <S.Label>{label}</S.Label>}
      <S.Wrapper mt={mt} mb={mb} half={half}>
        <S.TextInput {...inputProps} />
      </S.Wrapper>
    </View>
  );
}
