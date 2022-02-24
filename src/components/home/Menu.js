import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight, SafeAreaView, useWindowDimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import useAuth from "../../hooks/useAuth";
import { useRoute } from "@react-navigation/native";


const avatarUser = require("../../images/user.png");

export const Menu = ({ navigation }) => {
    const { height } = useWindowDimensions();
    const { nombre, distrito, Logout } = useAuth();
    const route = useRoute();

    const handlerSession = () => {
        Logout();
        navigation.replace("Login");
    }

    const goToScreen = (locationScreen) => {
        if (route.name != "Home") {
            navigation.jumpTo(locationScreen);
        } else {
            navigation.navigate("Home");
        }
    }

    return(

            <SafeAreaView style={ styles.containerMenu }>
                <View style={[ styles.drawerTopItem, { height: height / 5 }]}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={{
                                marginRight: 20,
                                width: 64,
                                height: 64
                            }}
                            source={ avatarUser }
                        />
                        <Text style={{ color: "#ddd" }}>Hola, </Text>
                        <Text style={{ color:"#ffffff", fontWeight: "bold" }}>{ nombre }</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <Icon 
                            name="body-sharp"
                            size={ 16 }
                            color="#ffffff"
                        />
                        <Text style={{ marginLeft: 8, color: "#ffffff", fontSize: 12 }}>{ distrito }</Text>
                    </View>
                </View>
                <View style={ styles.drawerBottomItem }>
                    <View>
                        <TouchableHighlight
                            underlayColor="#ECF6FF"
                            style={ styles.buttonContainer }
                            onPress={ () => goToScreen("Inicio") }
                        >
                            <Text style={ styles.buttonText }>Inicio</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#ECF6FF" 
                            style={ styles.buttonContainer }
                            onPress={ () => navigation.navigate("Profile") }    
                        >
                            <Text style={ styles.buttonText }>Mi Perfil</Text>
                        </TouchableHighlight>
                        {/*<TouchableHighlight
                            underlayColor="#ECF6FF"  
                            style={ styles.buttonContainer }
                            onPress={ () => navigation.navigate("Terms") }
                        >
                            <Text style={ styles.buttonText }>Terminos y condiciones</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            style={ styles.buttonContainer }
                            onPress={ () => navigation.navigate("Politicy") }
                        >
                            <Text style={ styles.buttonText }>Politicas de privacidad</Text>
                        </TouchableHighlight>*/}
                    </View>
                        { /**Cerrar sesion*/ }
                    <View>
                        <TouchableHighlight
                            onPress={ handlerSession } 
                            style={[ styles.buttonContainer, styles.buttonLogout ]}
                            underlayColor="#e57a6d"
                        >
                            <Text style={{ color: "#333333", fontWeight: "bold" }}>Cerrar sesion</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    containerMenu: {
        flex: 1,
        paddingTop: 20
    },
    drawerTopItem: {
        backgroundColor: "#004aad",
        justifyContent: "center",
        paddingHorizontal: 20,
        flexDirection: "column"
    },
    drawerBottomItem: {
        backgroundColor: "#ffffff",
        padding: 20,
        justifyContent: "space-between"
    },
    buttonContainer: {
        backgroundColor: "#f3f6f9",
        padding: 12,
        marginBottom: 20,
        borderRadius: 15
    },
    buttonText: {
        color: "#747474",
        fontWeight: "700"
    },
    buttonLogout: {
        backgroundColor: "#FBC3C3",
    }
});