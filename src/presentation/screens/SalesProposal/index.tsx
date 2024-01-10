import React from "react";
import { Button } from "../../componentes/Button";
import { Screen } from "../../componentes/Screen";
import * as S from "./styles";
import { PersonInfo } from "./components/PersonInfo";
import { Contact } from "./components/Contact";
import { Address } from "./components/Address";

export function SalesProposal({ navigation }) {
  const [step, setStep] = React.useState(0);
  function handleBack() {
    if (step === 0) {
      navigation.goBack();
    }
    setStep((prev) => prev - 1);
  }

  function handleNext() {
    if (step === 2) {
      return;
    }
    setStep((prev) => prev + 1);
  }

  return (
    <Screen>
      {step === 0 && <PersonInfo />}
      {step === 1 && <Contact />}
      {step === 2 && <Address />}
      <S.ButtonsWrapper>
        <Button title="Voltar" onPress={handleBack} />
        <Button title="Próximo" onPress={handleNext} />
      </S.ButtonsWrapper>
    </Screen>
  );
}
