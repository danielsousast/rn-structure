import React from "react";
import * as S from "./styles";

interface Props {
  text: string;
  onPress: () => void;
}

export function LinkButton({ text, onPress }: Props) {
  return (
    <S.Wrapper onPress={onPress}>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
