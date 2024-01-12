import React from "react";
import ReactNativeModal from "react-native-modal";
import * as S from "./styles";
import { Proposal } from "@/features/proposals/interfaces";
import { LinkButton } from "@/presentation/components/LinkButton";
import { useRemove } from "@/features/proposals";

interface Props {
  visible: boolean;
  onClose: () => void;
  proposal: Proposal;
  onRemoveSuccess: () => void;
}

export function ModalProposal({
  visible,
  onClose,
  proposal,
  onRemoveSuccess,
}: Props) {
  const { removeProposal } = useRemove({
    onSucess: () => {
      onRemoveSuccess();
    },
  });
  function handleDeleteProposal() {
    removeProposal(proposal.id);
    onClose();
  }

  return (
    <ReactNativeModal
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
    >
      <S.Content>
        <S.InfoContent>
          <S.Title>Proposta</S.Title>
          <S.Row>
            <S.Label>Nome do titular:</S.Label>
            <S.Value>{proposal?.name}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>CPF:</S.Label>
            <S.Value>{proposal?.cpf}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>Cidade/UF:</S.Label>
            <S.Value>{`${proposal?.addressCity}/${proposal?.addressState}`}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>Telefone:</S.Label>
            <S.Value>{proposal?.phone}</S.Value>
          </S.Row>
        </S.InfoContent>

        <LinkButton text="Deletar proposta" onPress={handleDeleteProposal} />
      </S.Content>
    </ReactNativeModal>
  );
}
