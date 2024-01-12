import React from "react";
import * as S from "./styles";
import { FormInput } from "@/presentation/Form/FormInput";
import { useForm } from "react-hook-form";
import { Button } from "@/presentation/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schema";
import { formatCellphone, formatPhone } from "@/common/utils/mask";

interface Props {
  submitPersonInfo: (data: any) => void;
  handleBack: () => void;
  handleNext: () => void;
}

export function Contact({ submitPersonInfo, handleBack, handleNext }: Props) {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data: FormData) {
    submitPersonInfo(data);
    handleNext();
  }
  return (
    <S.Container>
      <S.ScreenTitle>Contato</S.ScreenTitle>
      <FormInput control={control} name={"phone"} label="Telefone" mb={12} />
      <FormInput
        control={control}
        name={"cellphone"}
        label="Celular"
        keyboardType="numeric"
        formatText={formatCellphone}
        mb={12}
      />
      <FormInput
        control={control}
        name={"email"}
        label="Email"
        keyboardType="numeric"
        mb={12}
      />
      <S.ButtonsWrapper>
        <Button title="Voltar" onPress={handleBack} variant="secondary" />
        <Button title="Próximo" onPress={handleSubmit(onSubmit)} />
      </S.ButtonsWrapper>
    </S.Container>
  );
}
