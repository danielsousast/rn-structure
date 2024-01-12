import zod from "zod";

export const personInfoSchema = zod.object({
  name: zod.string({ required_error: "Nome é obrigatório" }),
  cpf: zod.string({ required_error: "CPF é obrigatório" }),
  rg: zod.string({ required_error: "RG é obrigatório" }),
  maritalStatus: zod.string({ required_error: "Estado civil é obrigatório" }),
  birthDate: zod.string({ required_error: "Data de nascimento é obrigatório" }),
});

export const contactSchema = zod.object({
  phone: zod.string(),
  cellphone: zod.string(),
  email: zod.string({ required_error: "E-mail é obrigatório" }),
});

export const addressSchema = zod.object({
  address: zod.string({ required_error: "Endereço é obrigatório" }),
  addressNumber: zod.string(),
  addressComplement: zod.string(),
  addressNeighborhood: zod.string(),
  addressCity: zod.string(),
  addressState: zod.string(),
  addressZipCode: zod.string(),
});
