import React from "react";
import Icon from "@expo/vector-icons/Feather";
import * as S from "./styles";

interface Props {
  onPress: () => void;
  proposal: {
    name: string;
    cpf: string;
    address: string;
  };
}

export function PropoalItem({ onPress, proposal }: Props) {
  return (
    <S.ItemContainer onPress={onPress}>
      <S.IconWrapper>
        <Icon name="check" size={24} color="#fff" />
      </S.IconWrapper>
      <S.ItemContent>
        <S.ItemText>{proposal.name}</S.ItemText>
        <S.ItemLabel>{proposal.cpf}</S.ItemLabel>
        <S.ItemLabel>{proposal.address}</S.ItemLabel>
      </S.ItemContent>
    </S.ItemContainer>
  );
}
