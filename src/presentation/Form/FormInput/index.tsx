import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { Input } from "../Input";

interface FormInputProps extends React.ComponentProps<typeof Input> {
  control: any;
  label: string;
  name: string;
}

export function FormInput({ control, label, name, ...rest }: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => (
        <Input
          placeholder={label}
          label={label}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          error={errors[name]?.message as string}
          {...rest}
        />
      )}
    />
  );
}
