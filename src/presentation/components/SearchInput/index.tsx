import React from "react";
import Icon from "@expo/vector-icons/Feather";
import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

export function SearchInput({ value, onChangeText }: Props) {
  const { colors } = useTheme();
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <Icon name="search" size={24} color={colors.gray} />
      </S.IconWrapper>
      <S.Input
        placeholder="Buscar"
        clearButtonMode="always"
        value={value}
        onChangeText={onChangeText}
      />
    </S.Wrapper>
  );
}
