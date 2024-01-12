import { MaskService } from "react-native-masked-text";

export const formatCpf = (rawDocument: string): string => {
  return MaskService.toMask("cpf", rawDocument);
};

export const formatDate = (date: string): string => {
  return MaskService.toMask("datetime", date, {
    format: "DD/MM/YYYY",
  });
};

export const formatCellphone = (rawNumber: string): string => {
  return MaskService.toMask("cel-phone", rawNumber);
};

export const formatPhone = (rawNumber: string): string => {
  return MaskService.toMask("phone", rawNumber);
};

export const formatZipCode = (rawZipCode: string) => {
  return MaskService.toMask("zip-code", rawZipCode);
};
