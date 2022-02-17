import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStars } from "../utils/Stars";
import { useNavigation } from "@react-navigation/native";

export const BlockerDetailsScreen = ({ route }) => {
    const { profileData, avatar, serviceId } = route.params;
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <Image source={{ uri: avatar }} style={styles.image} />
                        <Text style={styles.text}>
                            {profileData.usuario.nombre} {profileData.usuario.apellido}
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text}>Reputación:</Text>
                        <View style={styles.container}>{getStars(profileData.reputacion)}</View>
                        <Text style={styles.text}>{profileData.reputacion}</Text>
                    </View>
                    <Text style={styles.text}>Presentación:</Text>
                    <View style={styles.secondaryContainer}>
                        <Text style={styles.secondaryText}>{profileData.presentacion}</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={ 0.7 }
                        onPress={() => {
                            navigation.navigate("ContactNav", {
                                screen: 'Contact',
                                params: { profileData: profileData, avatar: avatar, serviceId: serviceId }
                            })
                        }}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Contactar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#004aad",
        margin: 40,
        borderRadius: 30,
        overflow: "hidden",
        marginBottom: 40,
        padding: 10
    },
    container: {
        alignSelf: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15 / 2,
    },
    secondaryContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        marginBottom: 15,
        marginHorizontal: 15,
        marginVertical: 15
    },
    flatListContainer: {
        backgroundColor: "white",
        borderRadius: 30,
        marginBottom: 15,
        marginHorizontal: 15,
        flex: 1,
        paddingVertical: 15,
    },
    itemContainer: {
        width: "50%",
    },
    flatListItem: {
        color: "blue",
        fontSize: 11,
        marginHorizontal: 15,
        marginVertical: 2,
    },
    text: {
        textAlign: "left",
        color: "white",
        marginBottom: 10,
        marginHorizontal: 15,
    },
    secondaryText: {
        textAlign: "left",
        color: "#747474",
        marginVertical: 15,
        marginHorizontal: 15,
        height: 80,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        overflow: "hidden",
        margin: 15,
    },
    button: {
        backgroundColor: "#E6E9EA",
        paddingVertical: 12,
        marginVertical: 15,
        borderRadius: 15,
        width: "90%",
        alignSelf: "center"
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#666666",
    }
});