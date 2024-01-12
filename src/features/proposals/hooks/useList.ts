import { useEffect, useState } from "react";
import { proposalService } from "../service";
import { HookOptions, Proposal } from "../interfaces";

export function useList(options?: HookOptions) {
  const [loading, setLoading] = useState(false);
  const [proposals, setProposals] = useState<Proposal[]>([]);

  async function fetchProposals() {
    try {
      const response = proposalService.getListProposal();
      setProposals(response);
      options?.onSucess?.(response);
    } catch (error) {
      options?.onError?.(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProposals();
  }, []);

  return {
    proposals,
    loading,
    fetchProposals,
  };
}
