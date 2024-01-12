import { httClient } from "@/infra/http";

async function getCitities(uf: string) {
  return httClient.get(`/estados/${uf}/municipios`);
}

async function getUFs() {
  return httClient.get("/estados");
}

export const localServices = { getCitities, getUFs };
