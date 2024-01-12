export interface Proposal {
  id: string;
  name: string;
  cpf: string;
  rg: string;
  address: string;
  adressNumber: string;
  addressComplement: string;
  addressNeighborhood: string;
  addressCity: string;
  addressState: string;
  addressZipCode: string;
  addressCountry: string;
  phone: string;
  cellphone: string;
  email: string;
  birthDate: string;
  maritalStatus: string;
}

export interface HookOptions<S = undefined, E = undefined> {
  onSucess?: (params?: S) => void;
  onError?: (params?: E) => void;
}
