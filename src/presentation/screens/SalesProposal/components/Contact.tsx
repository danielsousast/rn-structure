import React from "react";
import { View } from "react-native";
import { Input } from "@/presentation/components";

import * as S from "./styles";

export function Contact() {
  return (
    <S.Container>
      <S.ScreenTitle>Contato</S.ScreenTitle>
      <Input placeholder="Telefone" label="Telefone" mb={12} />
      <Input
        placeholder="Celular"
        label="Celular"
        keyboardType="numeric"
        maxLength={11}
        mb={12}
      />
      <Input
        placeholder="Email"
        label="Email"
        keyboardType="numeric"
        maxLength={11}
        mb={12}
      />
    </S.Container>
  );
}
