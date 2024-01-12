import { mmkvStorage } from "@/infra/storage/mmkv";
import { Proposal } from "./interfaces";

function getListProposal() {
  return mmkvStorage.get("listProposal");
}

function addProposal(proposal: Proposal) {
  console.log(proposal);
  const listProposal = getListProposal() || [];

  const newProposal = {
    ...proposal,
    id: Math.random().toString(),
  };
  listProposal.push(newProposal);
  mmkvStorage.set("listProposal", listProposal);
}

function removeProposal(id: string) {
  const listProposal = getListProposal() || [];
  const newListProposal = listProposal.filter((item) => item.id !== id);
  mmkvStorage.set("listProposal", newListProposal);
}

export const proposalService = {
  getListProposal,
  addProposal,
  removeProposal,
};
