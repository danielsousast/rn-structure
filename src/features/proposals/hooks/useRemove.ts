import { useState } from "react";
import { proposalService } from "../service";
import { HookOptions, Proposal } from "../interfaces";

export function useRemove(options?: HookOptions) {
  const [loading, setLoading] = useState(false);

  async function removeProposal(proposalId: string) {
    try {
      proposalService.removeProposal(proposalId);
      options?.onSucess?.();
    } catch (error) {
      options?.onError?.();
    } finally {
      setLoading(false);
    }
  }

  return {
    removeProposal,
    loading,
  };
}
