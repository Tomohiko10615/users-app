import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/Ionicons";

import { USER_INFO } from "../../data/UserInfo";
import useAuth from "../../hooks/useAuth";

const avatarUser = require("../../images/user.png");

export const Menu = ({ navigation }) => {

    const { nombre, distrito, Logout } = useAuth();

    const handlerSession = () => {
        Logout();
        navigation.replace("Login");
        console.log(nombre, distrito);
    }

    return(
        <DrawerContentScrollView>
            <View style={ styles.containerMenu }>
                <View style={ styles.drawerTopItem }>
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
                            onPress={ () => navigation.navigate("Home") }
                        >
                            <Text style={ styles.buttonText }>Inicio</Text>
                        </TouchableHighlight>
                        {/* <TouchableHighlight
                            underlayColor="#ECF6FF" 
                            style={ styles.buttonContainer }
                            onPress={ () => navigation.navigate("Profile") }    
                        >
                            <Text style={ styles.buttonText }>Mi Perfil</Text>
                        </TouchableHighlight> */}
                        {/* <TouchableHighlight
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
                        </TouchableHighlight> */}
                    </View>
                    <View>
                        { /**Cerrar sesion*/ }
                        <TouchableHighlight
                            onPress={ handlerSession } 
                            style={[ styles.buttonContainer, styles.buttonLogout ]}
                        >
                            <Text style={ styles.buttonText }>Cerrar sesion</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    containerMenu: {
        flex: 1
    },
    drawerTopItem: {
        height: 130,
        backgroundColor: "#004aad",
        justifyContent: "center",
        paddingHorizontal: 20,
        flexDirection: "column"
    },
    drawerBottomItem: {
        height: 650,
        backgroundColor: "#ffffff",
        padding: 20,
        justifyContent: "space-between"
    },
    buttonContainer: {
        backgroundColor: "#f3f6f9",
        padding: 12,
        marginBottom: 20
    },
    buttonText: {
        color: "#747474",
        fontWeight: "700"
    },
    buttonLogout: {
        backgroundColor: "#FBC3C3"
    }
});