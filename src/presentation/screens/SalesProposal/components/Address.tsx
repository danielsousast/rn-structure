import React from "react";
import { Input } from "@/presentation/components";

import * as S from "./styles";

export function Address() {
  return (
    <S.Container>
      <S.ScreenTitle>Endereço</S.ScreenTitle>
      <Input placeholder="Telefone" label="Telefone" mb={12} />
      <S.InputWrapper>
        <Input
          placeholder="Estado"
          label="Estado"
          keyboardType="numeric"
          maxLength={11}
          mb={12}
          half
        />
        <Input
          placeholder="Cidade"
          label="Cidade"
          keyboardType="numeric"
          maxLength={11}
          mb={12}
          half
        />
      </S.InputWrapper>

      <Input placeholder="Bairro" label="Bairro" mb={12} />
      <Input placeholder="Endereço" label="Endereço" mb={12} />
      <S.InputWrapper>
        <Input placeholder="Número" label="Número" mb={12} half />
        <Input placeholder="CEP" label="CEP" mb={12} half />
      </S.InputWrapper>
      <Input placeholder="Complemento" label="Complemento" mb={12} />
    </S.Container>
  );
}
