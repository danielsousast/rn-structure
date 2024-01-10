import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../../presentation/screens/HomeScreen";
import { SalesProposal } from "../../presentation/screens/SalesProposal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SalesProposal" component={SalesProposal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
