import React, { useState, useReducer } from "react";

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Alert } from "react-native";
import { LoginBottomContainer } from "../../containers/LoginBottomContainer";

// import { CustomInput } from "./CustomInput";
import { useForm } from "../../hooks/useForm";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


export const HeaderContain = () => {

    const navigation = useNavigation();

    const { email, password, onChange } = useForm({
        email: "",
        password: ""
    });
 
    const alertMessage = () => {
        Alert.alert("", `Ingrese los credenciales completos`);
    }

    const onLogin = () => {
        // Dispatch de una accion para autenticar
        Keyboard.dismiss();
        
        if(email == "" || password == "") {
            alertMessage()
        } else {
            navigation.replace("Home");
            console.log({email, password})
        }
    }

    const [ visiblePass, setVisiblePass ] = useState(true);
    let isVisible = visiblePass ? "eye-off-outline" : "eye-outline";

    const passwordVisibility = () => {
        setVisiblePass(!visiblePass);
    }

    return(
        <View style={ styles.LoginContainer }>
            <Text style={ styles.loginTitle }>INICIAR SESION</Text>
            <TextInput 
                placeholder="Correo electronico"
                style={ styles.input }
                onChangeText={ (value) => onChange(value, "email") }
                onSubmitEditing={ onLogin }
                value={ email }
            />
            <View style={[ styles.input, styles.customInputContainer ]}>
                <TextInput 
                    placeholder="Contraseña"
                    onChangeText={ (value) => onChange(value, "password") }
                    onSubmitEditing={ onLogin }
                    value={ password }
                    secureTextEntry={ visiblePass }
                    style={{ width: 220 }}
                />
                <Icon
                    onPress={ passwordVisibility }
                    name={ isVisible }
                    size={ 23 }
                    color="#004aad"
                    style={{ padding: 5, marginLeft: 20 }}
                />
            </View>
            {/* <LoginBottomContainer /> */}
            <View style={ styles.bottomContainer }>
                <TouchableOpacity 
                    activeOpacity={ 0.6 }
                    onPress={ onLogin }
                >
                    <View style={ styles.button }>
                        <Text style={ styles.buttonText }>CONTINUAR</Text>
                    </View>
                </TouchableOpacity>
                <LoginBottomContainer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    LoginContainer: {
        width: "100%",
        height: "85%",
        backgroundColor: "#004aad",
        alignItems: "center",
        paddingVertical: 40
    },
    loginTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 40
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 30
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        marginVertical: 25
    },
    buttonText: {
        color: "#333333",
        fontWeight: "bold"
    },
    bottomContainer: {
        width: "100%",
        height: 300,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    customInputContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});