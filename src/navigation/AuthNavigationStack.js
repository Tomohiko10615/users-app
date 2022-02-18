import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";

import { MainNavigationDrawer } from "../navigation/MainNavigationDrawer"
import { SuccessNavigationStack } from "./SuccessStack";

import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");
export const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: {
        screens: {
            Home: {
                screens: {
                    Notificaciones: "message",
                    Contratos: "service",
                }
                
            }
        },
      },
    },
  },
};

const AuthStack = createStackNavigator();

export const AuthNavigationStack = () => {
    return(
        <AuthStack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}    
        >
            <AuthStack.Screen name="Login" component={ LoginScreen } />
            <AuthStack.Screen name="Register" component={ RegisterScreen } />
            <AuthStack.Screen name="Home" component={ MainNavigationDrawer } />
            <AuthStack.Screen name="SuccessNav" component={ SuccessNavigationStack } />
        </AuthStack.Navigator>
    );
}
