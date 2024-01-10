import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import * as S from "./styles";
import { useTheme } from "styled-components/native";

export function FilterButton() {
  const { colors } = useTheme();
  return (
    <S.Container>
      <Icon name="filter" size={20} color={colors.white} />
    </S.Container>
  );
}
