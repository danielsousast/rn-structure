import React from "react";
import { Screen } from "@/presentation/components";
import { PersonInfo } from "./components/PersonInfo";
import { Contact } from "./components/Contact";
import { Address } from "./components/Address";
import { useAddProposal } from "@/features/proposals";
import { Routes } from "@/app/navigation/Routes";

interface FormData {
  name: string;
  cpf: string;
  rg: string;
  phone: string;
  cellphone: string;
  email: string;
  address: string;
  addressNumber: string;
  addressComplement: string;
  addressNeighborhood: string;
  addressCity: string;
  addressState: string;
  addressZipCode: string;
  maritalStatus: string;
  birthDate: string;
}

export function SalesProposal({ navigation }) {
  const { addProposal } = useAddProposal({
    onSucess: () => {
      navigation.reset({
        index: 0,
        routes: [{ name: Routes.Home }],
      });
    },
  });
  const [personInfo, setPersonInfo] = React.useState<FormData>(null);
  const [contact, setContact] = React.useState<FormData>(null);
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

  function onSubmit(adressData: any) {
    const data = {
      ...personInfo,
      ...contact,
      ...adressData,
    };
    addProposal(data as any);
    navigation.reset({
      index: 0,
      routes: [{ name: Routes.Home }],
    });
  }

  return (
    <Screen scrollable>
      {step === 0 && (
        <PersonInfo
          handleBack={handleBack}
          submitPersonInfo={setPersonInfo}
          handleNext={handleNext}
        />
      )}
      {step === 1 && (
        <Contact
          submitPersonInfo={setContact}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}
      {step === 2 && (
        <Address submitAddress={onSubmit} handleBack={handleBack} />
      )}
    </Screen>
  );
}
