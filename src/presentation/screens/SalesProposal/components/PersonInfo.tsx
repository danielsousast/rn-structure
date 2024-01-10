import React from "react";
import * as S from "./styles";
import { Input } from "../../../componentes/Input";

export function PersonInfo() {
  return (
    <S.Container>
      <S.ScreenTitle>Informações pessoais</S.ScreenTitle>
      <Input placeholder="Nome do titular" label="Nome do titular" mb={12} />
      <Input
        placeholder="CPF"
        label="CPF"
        keyboardType="numeric"
        maxLength={11}
        mb={12}
      />
      <Input
        placeholder="RG"
        label="RG"
        keyboardType="numeric"
        maxLength={11}
        mb={12}
      />
      <Input
        placeholder="Data de nascimento"
        label="Data de nascimento"
        keyboardType="numeric"
        mb={12}
      />
      <Input placeholder="Estado civil" label="Estado civil" mt={8} />
    </S.Container>
  );
}
