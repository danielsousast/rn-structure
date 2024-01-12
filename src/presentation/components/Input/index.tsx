import React, { useCallback } from "react";
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
  error?: string;
  formatText?: (text: string) => string;
}

export function Input({
  mt,
  mb,
  label,
  half,
  error,
  formatText,
  onChangeText,
  ...inputProps
}: InputProps) {
  const handleChangeText = useCallback(
    (value: string) => {
      let text = value;
      if (formatText) {
        text = formatText(text);
      }

      onChangeText && onChangeText(text);
    },
    [formatText, onChangeText]
  );

  return (
    <S.Container mt={mt} mb={mb}>
      {label && <S.Label>{label}</S.Label>}
      <S.Wrapper half={half}>
        <S.TextInput {...inputProps} onChangeText={handleChangeText} />
      </S.Wrapper>
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  );
}
