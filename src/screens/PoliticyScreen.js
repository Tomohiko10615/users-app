import React from "react";

import { View, Text } from "react-native";
import {Header} from "../components/home/Header"

export const PoliticyScreen = () => {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Header />
            <Text>PoliticyScreen</Text>
        </View>
    );
}