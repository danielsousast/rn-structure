import React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import * as S from "./styles";
import { Screen } from "../../componentes/Screen";
import { Button } from "../../componentes/Button";
import { PropoalItem } from "./components/PropoalItem";
import { Proposal } from "../../../features/proposals/interfaces";
import { SearchInput } from "../../componentes/SearchInput";

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
    navigation.navigate("SalesProposal");
  }

  function renderItem({ item }: ListRenderItemInfo<Proposal>) {
    return <PropoalItem proposal={item} onPress={() => {}} />;
  }

  return (
    <Screen>
      <S.Content>
        <SearchInput />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={proposals}
          renderItem={renderItem}
        />
      </S.Content>
      <Button title="Nova proposta" onPress={handleNewProposal} />
      <Button title="Relatório" onPress={() => {}} />
    </Screen>
  );
}
