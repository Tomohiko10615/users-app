import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigationStack } from "./src/navigation/AuthNavigationStack";



export default function App() {
  return(
      <NavigationContainer>
        <AuthNavigationStack />
      </NavigationContainer>
  );
}

