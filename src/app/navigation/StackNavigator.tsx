import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SalesProposal } from "@/presentation/screens";
import { Routes } from "./Routes";
import { ReportScreen } from "@/presentation/screens/ReportScreen";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
        <Stack.Screen name={Routes.SalesProposal} component={SalesProposal} />
        <Stack.Screen name={Routes.Report} component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
