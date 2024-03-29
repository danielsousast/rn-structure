import React from "react";
import * as S from "./styles";
import { Button, Input } from "@/presentation/components";
import { FormInput } from "@/presentation/components/Form/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personInfoSchema } from "../schema";
import { formatCpf, formatDate } from "@/common/utils/mask";
import { SelectInput } from "@/presentation/components/Form/SelectInput";

const options = [
  {
    label: "Solteiro(a)",
    value: "single",
  },
  {
    label: "Casado(a)",
    value: "married",
  },
  {
    label: "Divorciado(a)",
    value: "divorced",
  },
  {
    label: "Viúvo(a)",
    value: "widower",
  },
  {
    label: "Separado(a)",
    value: "separated",
  },
];

interface Props {
  handleBack: () => void;
  handleNext: () => void;
  submitPersonInfo: (data: any) => void;
}

export function PersonInfo({
  handleBack,
  submitPersonInfo,
  handleNext,
}: Props) {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(personInfoSchema),
  });

  function onSubmit(data: FormData) {
    submitPersonInfo(data);
    handleNext();
  }

  return (
    <S.Container>
      <S.ScreenTitle>Informações pessoais</S.ScreenTitle>
      <FormInput
        control={control}
        name="name"
        label="Nome do titular"
        mb={12}
      />
      <FormInput
        control={control}
        name="cpf"
        label="CPF"
        formatText={formatCpf}
        keyboardType="numeric"
        mb={12}
      />
      <FormInput
        control={control}
        name="rg"
        label="RG"
        keyboardType="numeric"
        maxLength={11}
        mb={12}
      />
      <FormInput
        control={control}
        name="birthDate"
        label="Data de nascimento"
        keyboardType="numeric"
        formatText={formatDate}
        mb={12}
      />

      <SelectInput
        options={options}
        control={control}
        name="maritalStatus"
        label="Estado civil"
      />
      <S.ButtonsWrapper>
        <Button title="Voltar" onPress={handleBack} variant="secondary" />
        <Button title="Próximo" onPress={handleSubmit(onSubmit)} />
      </S.ButtonsWrapper>
    </S.Container>
  );
}
