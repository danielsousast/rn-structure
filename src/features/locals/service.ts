import { httClient } from "@/infra/http";
import { localsAdapter } from "./adapters";

async function getCitities(uf: string) {
  const reponse = await httClient.get(`/estados/${uf}/municipios`);
  return localsAdapter.cityToItem(reponse.data);
}

async function getUFs() {
  const reponse = await httClient.get("/estados");
  return localsAdapter.ufToItem(reponse.data);
}

export const localServices = { getCitities, getUFs };
