import React from "react";
import * as S from "./styles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: "primary" | "secondary";
}

export function Button({ onPress, title, variant = "primary" }: ButtonProps) {
  return (
    <S.ButtonContainer variant={variant} onPress={onPress} activeOpacity={0.7}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.ButtonContainer>
  );
}
