import React from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlockerItem } from "../components/BlockersList/BlockerItem";

export const BlockerServiceScreen = () => {
    return(
        <SafeAreaView>
            <ScrollView nestedScrollEnabled={ true }>
                <View style={ styles.blockersList }>
                    <View style={ styles.ubicationRoute }>
                        <Text style={ styles.label }>Categoria: </Text>
                        <Text style={ styles.category } >Servicio seleccionado</Text>
                    </View>
                    <Text style={ styles.sectionTitle }>BLOCKERS</Text>
                </View>
                <View style={ styles.blockerListContainer }>
                    {/* Flatlist Component's error in console: advisament */}
                    <BlockerItem />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ubicationRoute: {
        flexDirection: "row",
        marginBottom: 20
    },
    blockersList: {
        backgroundColor: "#f3f6f9",
        width: "100%",
        paddingVertical: 35,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333333"
    },
    label: {
        color: "#747474"
    },
    category: {
        color: "#333333",
        fontWeight: "bold"
    },
    blockerListContainer: {
        marginVertical: 20
    }
});