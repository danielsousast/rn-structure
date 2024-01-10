import React from "react";
import Icon from "@expo/vector-icons/Feather";
import * as S from "./styles";

export function SearchInput() {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <Icon name="search" size={24} color="#000" />
      </S.IconWrapper>
      <S.Input placeholder="Buscar" />
    </S.Wrapper>
  );
}
