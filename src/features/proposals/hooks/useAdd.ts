import { useState } from "react";
import { proposalService } from "../service";
import { HookOptions, Proposal } from "../interfaces";

export function useAddProposal(options?: HookOptions) {
  const [loading, setLoading] = useState(false);

  async function addProposal(data: Proposal) {
    try {
      const response = proposalService.addProposal(data);
      options?.onSucess?.();
    } catch (error) {
      options?.onError?.(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    addProposal,
    loading,
  };
}
