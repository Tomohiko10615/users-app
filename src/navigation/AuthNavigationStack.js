import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";

import { MainNavigationDrawer } from "../navigation/MainNavigationDrawer"

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
        </AuthStack.Navigator>
    );
}
