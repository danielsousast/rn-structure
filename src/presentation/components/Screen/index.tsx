import React from "react";
import * as S from "./styles";
import { useAppSafeArea } from "@/presentation/hooks";

type ScreenProps = {
  children: React.ReactNode;
  scrollable?: boolean;
};

export function Screen({ children, scrollable = false }: ScreenProps) {
  const { top } = useAppSafeArea();

  const Container = scrollable ? S.ScrollView : S.Container;
  return (
    <Container
      style={{
        paddingTop: top + 10,
      }}
    >
      {children}
    </Container>
  );
}
