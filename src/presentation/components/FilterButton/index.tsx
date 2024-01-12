import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export function FilterButton() {
  const { colors } = useTheme();
  return (
    <S.Container>
      <Icon name="filter" size={20} color={colors.white} />
    </S.Container>
  );
}
