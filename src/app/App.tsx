import "@/config/reactotron";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { Navigator } from "./navigation/StackNavigator";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/common/styles/theme";
import { Toast } from "@/presentation/components/Toast";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Navigator />
      <Toast />
    </ThemeProvider>
  );
}
