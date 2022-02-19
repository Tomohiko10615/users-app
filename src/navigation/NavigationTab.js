import React, { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { ContractsScreen } from "../screens/ContractsScreen";
import { NotificationScreen } from "../screens/NotificationScreen";

import Icon from "react-native-vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();


export const NavigationTab = () => {

    function IconType(isFocused, normal, outline) {
        let iconRender = isFocused ? normal : `${normal}-${outline}`;
        return iconRender;
    }

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Inicio" 
                component={ HomeScreen }
                options={{
                    tabBarIcon: ({ focused }) => 
                        <Icon 
                            name={ IconType(focused, "home", "outline") } 
                            color={focused ? "#0042FF" : "#999999" } 
                            size={ 30 } 
                        />
                }}
            />
            <Tab.Screen 
                name="Contratos"
                component={ ContractsScreen }
                options={{
                    tabBarIcon: ({ focused }) => 
                        <Icon name={ IconType(focused, "construct", "outline") } 
                            color={ focused ? "#0042FF" : "#999999" } 
                            size={ 30 } 
                        />
                }} 
            />
            <Tab.Screen 
                name="Notificaciones"
                component={ NotificationScreen } 
                options={{
                    tabBarIcon: ({ focused }) => 
                        <Icon name={ IconType(focused, "notifications", "outline") } 
                            color={ focused ? "#0042FF" : "#999999" } 
                            size={ 30 } 
                        />
                }}    
            />
        </Tab.Navigator>
    );
}