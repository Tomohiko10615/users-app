import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigationStack } from "./src/navigation/AuthNavigationStack";
import { AuthProvider } from "./src/auth/AuthContext";


export default function App() {
  return(
      <NavigationContainer>
        <AuthProvider>
          <AuthNavigationStack />
        </AuthProvider>
      </NavigationContainer>
  );
}

