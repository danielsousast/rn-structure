import React from "react";
import { Button } from "@/presentation/components";

import * as S from "./styles";
import { FormInput } from "@/presentation/components/Form/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../schema";
import { formatZipCode } from "@/common/utils/mask";
import { SelectInput } from "@/presentation/components/Form/SelectInput";
import { useUfs } from "@/features/locals/hooks/useUfs";
import { useCities } from "@/features/locals/hooks/useCities";

interface Props {
  submitAddress: (data: any) => void;
  handleBack: () => void;
}

export function Address({ submitAddress, handleBack }: Props) {
  const [uf, setUf] = React.useState("");
  const { ufs } = useUfs();
  const { cities } = useCities(uf);
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(addressSchema),
  });

  function onSubmit(data: FormData) {
    submitAddress(data);
  }
  return (
    <S.Container>
      <S.ScreenTitle>Endereço</S.ScreenTitle>

      <S.InputWrapper>
        <SelectInput
          options={ufs as any}
          name="addressState"
          control={control}
          label="Estado"
          onValueChange={(value) => setUf(value)}
          half
        />
        <SelectInput
          options={cities as any}
          name="addressCity"
          control={control}
          label="Cidade"
          half
        />
      </S.InputWrapper>

      <FormInput
        control={control}
        name="addressNeighborhood"
        label="Bairro"
        mb={12}
      />
      <FormInput control={control} name="address" label="Endereço" mb={12} />
      <S.InputWrapper>
        <FormInput
          control={control}
          name="addressNumber"
          label="Número"
          mb={12}
          half
        />
        <FormInput
          control={control}
          name="addressZipCode"
          label="CEP"
          mb={12}
          formatText={formatZipCode}
          half
        />
      </S.InputWrapper>
      <FormInput
        control={control}
        name="addressComplement"
        label="Complemento"
        mb={12}
      />
      <S.ButtonsWrapper>
        <Button title="Voltar" onPress={handleBack} variant="secondary" />
        <Button title="Salvar" onPress={handleSubmit(onSubmit)} />
      </S.ButtonsWrapper>
    </S.Container>
  );
}
