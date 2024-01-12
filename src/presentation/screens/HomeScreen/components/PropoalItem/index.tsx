import React from "react";
import Icon from "@expo/vector-icons/Feather";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface Props {
  onPress: () => void;
  withBorder?: boolean;
  proposal: {
    name: string;
    cpf: string;
    address: string;
  };
}

export function PropoalItem({ onPress, proposal, withBorder }: Props) {
  const { colors } = useTheme();
  return (
    <S.ItemContainer onPress={onPress} withBorder={withBorder}>
      <S.IconWrapper>
        <Icon name="check" size={18} color={colors.text} />
      </S.IconWrapper>
      <S.ItemContent>
        <S.ItemText>{proposal.name}</S.ItemText>
        <S.ItemLabel>{proposal.cpf}</S.ItemLabel>
        <S.ItemLabel>{proposal.address}</S.ItemLabel>
      </S.ItemContent>
    </S.ItemContainer>
  );
}
