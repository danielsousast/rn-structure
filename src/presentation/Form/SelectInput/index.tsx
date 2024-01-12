import React from "react";
import { Controller } from "react-hook-form";
import { DropdownProps } from "react-native-input-select/lib/typescript/types/index.types";
import * as S from "./styles";

interface Props extends Omit<DropdownProps, "onValueChange"> {
  control: any;
  name: string;
  half?: boolean;
  onValueChange?: (value: any) => void;
}

export function SelectInput({
  control,
  label,
  name,
  onValueChange,
  half,
  ...rest
}: Props) {
  function handleOnValueChange(onChange, event) {
    onChange(event);
    onValueChange && onValueChange(event);
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => (
        <S.Wrapper half={half}>
          <S.Label>{label}</S.Label>
          <S.Dropdown
            placeholder={label}
            onValueChange={(event) => handleOnValueChange(onChange, event)}
            selectedValue={value}
            isMultiple={false}
            isSearchable
            error={errors[name]?.message as string}
            {...rest}
          />
        </S.Wrapper>
      )}
    />
  );
}
