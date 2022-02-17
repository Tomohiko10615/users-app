import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { ContactScreen } from "../screens/ContactScreen";
import { HeaderCustomStack } from "../components/HeaderCustomStack";

const ContactStack = createStackNavigator();

export const ContactNavigationStack = () => {

    return (
        <ContactStack.Navigator 
            screenOptions={{
                headerLeft: () => {
                    return(
                        <HeaderCustomStack />
                    );
                }
            }}
        >
            <ContactStack.Screen 
                name="Contact" 
                component={ ContactScreen }
                options={{
                    headerStyle: {
                        backgroundColor: "#004aad"
                    },
                    headerTitleStyle: {
                        color: "#ffffff"
                    }
                }}
            />
        </ContactStack.Navigator>
    );
}