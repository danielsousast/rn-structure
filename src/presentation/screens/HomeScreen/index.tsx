import React, { useMemo, useState } from "react";
import { FlatList, ListRenderItemInfo, RefreshControl } from "react-native";
import {
  Screen,
  Button,
  SearchInput,
  EmtpyFeedback,
} from "@/presentation/components";
import { PropoalItem, ModalProposal } from "./components";
import { Proposal } from "@/features/proposals/interfaces";
import { Routes } from "@/app/navigation/Routes";
import { useList } from "@/features/proposals/hooks/useList";
import * as S from "./styles";

export function HomeScreen({ navigation }) {
  const { proposals, fetchProposals } = useList();
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProposals = useMemo(() => {
    if (!search) {
      return proposals;
    }
    return proposals.filter((proposal) =>
      proposal.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, proposals]);

  function handleNewProposal() {
    navigation.navigate(Routes.SalesProposal);
  }

  function onItemPress(item: Proposal) {
    setSelectedProposal(item);
    setShowModal(true);
  }

  function handleReport() {
    navigation.navigate(Routes.Report);
  }

  function renderItem({ item, index }: ListRenderItemInfo<Proposal>) {
    console.log("item", item);
    return (
      <PropoalItem
        proposal={item}
        onPress={() => onItemPress(item)}
        withBorder={index !== proposals.length - 1}
      />
    );
  }

  return (
    <Screen>
      <S.Content>
        <S.SearContainer>
          <SearchInput value={search} onChangeText={setSearch} />
        </S.SearContainer>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredProposals}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={fetchProposals} />
          }
          ListEmptyComponent={() => <EmtpyFeedback />}
        />
      </S.Content>
      <Button title="Nova proposta" onPress={handleNewProposal} />
      <Button variant="secondary" title="Relatório" onPress={handleReport} />
      <ModalProposal
        visible={showModal}
        proposal={selectedProposal}
        onClose={() => setShowModal(false)}
        onRemoveSuccess={fetchProposals}
      />
    </Screen>
  );
}
