import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { ContractsScreen } from "../screens/ContractsScreen";
import { NotificationScreen } from "../screens/NotificationScreen";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const NavigationTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Inicio" 
                component={ HomeScreen }
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="home-sharp" color={ color } size={ size } />
                }}
            />
            <Tab.Screen 
                name="Contratos"
                component={ ContractsScreen }
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="construct-sharp" color={ color } size={ size } />
                }} 
            />
            <Tab.Screen 
                name="Notificaciones"
                component={ NotificationScreen } 
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="notifications-sharp" color={ color } size={ size } />
                }}    
            />
        </Tab.Navigator>
    );
}