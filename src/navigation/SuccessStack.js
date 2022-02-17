import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SuccessScreen } from "../screens/SuccessScreen";
import { HeaderCustomStack } from "../components/HeaderCustomStack";

const SuccessStack = createStackNavigator();

export const SuccessNavigationStack = () => {

    return (
        <SuccessStack.Navigator 
            screenOptions={{
                headerShown: false,
                headerLeft: () => {
                    return(
                        <HeaderCustomStack />
                    );
                }
            }}
        >
            <SuccessStack.Screen name="Success" component={ SuccessScreen } 
            />
        </SuccessStack.Navigator>
    );
}