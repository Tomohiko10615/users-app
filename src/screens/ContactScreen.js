import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from "react";
import { getStars } from '../utils/Stars';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { StackActions, NavigationActions } from 'react-navigation';

export const ContactScreen = ({ route }) => {
    const { profileData, avatar, serviceId } = route.params;
    const [mensaje, setMensaje] = useState("");
    const navigation = useNavigation();

    const clienteId = 1;

    async function sendMessage() {
        try {
            const newMessage = {
                mensajeCliente: mensaje,
                cliente: {
                    id: clienteId
                },
                blocker: {
                    id: profileData.id
                },
                servicio: {
                    id: Number(serviceId)
                },
                distrito: {
                    id: 5
                }
            };

            console.log(JSON.stringify(newMessage))

            const response = await fetch(
                "https://pasteblock.herokuapp.com/api/enviar",
                {
                    method: "POST",
                    body: JSON.stringify(newMessage),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const result = await response.json();
            console.log(result)
            if (result) {
                let successMessage = "Hemos enviado tu solicitud. Espera la respuesta del blocker con las condiciones del servicio.";

                navigation.replace("SuccessNav", {
                    screen: "Success",
                    params: {
                        successMessage: successMessage,
                        redirect: "Home",
                        navigation: navigation
                    }
                });
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    return (
        <SafeAreaView>
            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.mainContainer}>
                    <Text style={styles.text}>Especifica los detalles del trabajo: </Text>
                    <TextInput
                        style={styles.input}
                        value={mensaje}
                        multiline
                        numberOfLines={5}
                        onChangeText={(text) => setMensaje(text)}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            sendMessage()
                        }}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Enviar mensaje</Text>
                        </View>
                    </TouchableOpacity>

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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#004aad",
        margin: 40,
        borderRadius: 30,
        overflow: "hidden",
        paddingTop: 15
    },
    container: {
        alignSelf: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15 / 2,
    },
    secondaryContainer: {
        backgroundColor: "white",
        borderRadius: 30,
        marginBottom: 15,
        marginHorizontal: 15,
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
        color: "#004aad",
        marginVertical: 15,
        marginHorizontal: 15,
        height: 80,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 30,
        overflow: "hidden",
        margin: 15,
    },
    button: {
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        marginBottom: 15,
        borderRadius: 15,
        width: "60%",
        alignSelf: "center"
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#004aad",
    },
    input: {
        height: 200,
        marginBottom: 20,
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "white",
        width: "80%",
        alignSelf: "center",
        color: "black",
        textAlignVertical: "top",
    },
});