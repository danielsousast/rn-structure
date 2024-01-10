import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Screen, Button, SearchInput } from "@/presentation/components";
import { PropoalItem } from "./components/PropoalItem";
import { Proposal } from "@/features/proposals/interfaces";
import { Routes } from "@/app/navigation/Routes";
import * as S from "./styles";
import { FilterButton } from "@/presentation/components/FilterButton";

const proposals: Proposal[] = [
  {
    id: "1",
    name: "João da Silva",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123",
  },
  {
    id: "2",
    name: "João da Silva",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123",
  },
  {
    id: "3",
    name: "João da Silva",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123",
  },
  {
    id: "4",
    name: "João da Silva",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123",
  },
  {
    id: "5",
    name: "João da Silva",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123",
  },
  {
    id: "6",
    name: "João da Silva",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123",
  },
  {
    id: "7",
    name: "João da Silva",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123",
  },
  {
    id: "8",
    name: "João da Silva",
    cpf: "123.456.789-00",
    address: "Rua das Flores, 123",
  },
];

export function HomeScreen({ navigation }) {
  function handleNewProposal() {
    navigation.navigate(Routes.SalesProposal);
  }

  function renderItem({ item, index }: ListRenderItemInfo<Proposal>) {
    return (
      <PropoalItem
        proposal={item}
        onPress={() => {}}
        withBorder={index !== proposals.length - 1}
      />
    );
  }

  return (
    <Screen>
      <S.Content>
        <S.SearContainer>
          <SearchInput />
          <FilterButton />
        </S.SearContainer>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={proposals}
          renderItem={renderItem}
        />
      </S.Content>
      <Button title="Nova proposta" onPress={handleNewProposal} />
      <Button variant="secondary" title="Relatório" onPress={() => {}} />
    </Screen>
  );
}
