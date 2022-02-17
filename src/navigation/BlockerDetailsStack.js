import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { BlockerDetailsScreen } from "../screens/BlockerDetailsScreen";
import { HeaderCustomStack } from "../components/HeaderCustomStack";

const BlockerDetailsStack = createStackNavigator();

export const BlockerDetailsNavigationStack = () => {

    return (
        <BlockerDetailsStack.Navigator 
            screenOptions={{
                headerLeft: () => {
                    return(
                        <HeaderCustomStack />
                    );
                }
            }}
        >
            <BlockerDetailsStack.Screen 
                name="BlockerDetails" 
                component={ BlockerDetailsScreen }
                options={{
                    headerStyle: {
                        backgroundColor: "#004aad"
                    },
                    headerTitleStyle: {
                        color: "#ffffff"
                    }
                }}
            />
        </BlockerDetailsStack.Navigator>
    );
}