import "@/config/reactotron";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigator } from "./navigation/StackNavigator";
import { ThemeProvider } from "styled-components/native";
import { themeDark } from "../common/styles/themeDark";

export default function App() {
  return (
    <ThemeProvider theme={themeDark}>
      <StatusBar style="auto" />
      <Navigator />
    </ThemeProvider>
  );
}
