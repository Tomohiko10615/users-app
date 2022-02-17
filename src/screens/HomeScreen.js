import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

import { Header } from "../components/home/Header";
import { HomeContain } from "../components/home/HomeContain";
import useAuth from "../hooks/useAuth";


export const HomeScreen = () => {
    const { isLoggedIn } = useAuth();
    console.log(useAuth());

    let isStatusBar = isLoggedIn === undefined ? 
        <StatusBar 
            translucent 
            backgroundColor={ "#004aad" } 
        /> : 
        <StatusBar 
            translucent 
            backgroundColor={ "#ffffff" } 
        />

    return(
        <SafeAreaView>
            { isStatusBar }
            <ScrollView>
            <Header />
            <HomeContain />
            </ScrollView>
        </SafeAreaView>
    );
}