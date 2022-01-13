import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, StyleSheet } from "react-native";

import { Header } from "../components/home/Header";
import { HomeContain } from "../components/home/HomeContain";


export const HomeScreen = () => {
    return(
        <SafeAreaView>
            <Header />
            <HomeContain />
        </SafeAreaView>
    );
}