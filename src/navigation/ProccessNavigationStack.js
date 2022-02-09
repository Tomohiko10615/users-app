import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { BlockerServiceScreen } from "../screens/BlockerServiceScreen";
import { HeaderCustomStack } from "../components/HeaderCustomStack";

const ProccessStack = createStackNavigator();

export const ProccessNavigationStack = (props) => {
    const { serviceId } = props;
    console.log(serviceId);
    return (
        <ProccessStack.Navigator 
            screenOptions={{
                headerLeft: () => {
                    return(
                        <HeaderCustomStack />
                    );
                }
            }}
        >
            <ProccessStack.Screen name="Blockers" component={ BlockerServiceScreen }
            />
        </ProccessStack.Navigator>
    );
}