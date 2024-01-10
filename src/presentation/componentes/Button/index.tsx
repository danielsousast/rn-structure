import React from "react";
import * as S from "./styles";

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export function Button({ onPress, title }: ButtonProps) {
  return (
    <S.ButtonContainer onPress={onPress} activeOpacity={0.7}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.ButtonContainer>
  );
}
