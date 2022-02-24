import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Alert, StatusBar, ActivityIndicator } from "react-native";
import { LoginBottomContainer } from "../../containers/LoginBottomContainer";

import { useFormik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";
import { useWindowDimensions } from "react-native";

export const HeaderContain = () => {
    const navigation = useNavigation();
    const {height, width} = useWindowDimensions();

    const [ error, setError ] = useState("");
    const [ logging, setLogging ] = useState(false);
    const { Login, token, JWTtoken } = useAuth();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + JWTtoken);

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,

        onSubmit: async () => {
            setLogging(true);
            setError("");

            try {
                const response = await fetch(
                    "https://pasteblock.herokuapp.com/api/login", {
                        method: "POST",
                        body: JSON.stringify(formik.values),
                        headers: myHeaders
                    }
                );

                const result = await response.json();
                setLogging(false);

                if (result.success) {
                    Login(result.success, result.email, result.nombre, result.JWTtoken, result.clienteId, result.distrito, result.distritoId); //Login(s)

                    if (token != result.token) {
                         const url = "https://pasteblock.herokuapp.com/api/token";
                         const user = { 
                             tokenDispositivo: token
                         };

                         try {
                             const response = await fetch(url, {
                                 method: "POST",
                                 body: JSON.stringify(user),
                                 headers: {
                                    "Content-Type": "application/json",
                                 },
                             });

                             const resultToken = await response.json();
                             

                         } catch (error) {
                             throw error;
                         }
                    }
                    
                    navigation.replace("Home");
                } else {
                    setError("Email o contraseña incorrectos");
                }

                return result;
            } catch (error) {
                throw error;
            }
        },
    });


    const [ visiblePass, setVisiblePass ] = useState(true);
    let isVisible = visiblePass ? "eye-off-outline" : "eye-outline";

    const passwordVisibility = () => {
        setVisiblePass(!visiblePass);
    }

    return(
        <>
        <View style={ styles.LoginContainer }>
            <Text style={ styles.loginTitle }>INICIAR SESION</Text>
            <TextInput 
                placeholder="Correo electronico"
                style={ styles.input }
                value={ formik.values.email }
                onChangeText={ (text) => formik.setFieldValue("email", text) }
            />
            <Text style={{ color: "#dc3545", fontSize: 14, marginVertical: 10 }}>{ formik.errors.email }</Text>
            <View style={[ styles.input, styles.customInputContainer ]}>
                <TextInput 
                    placeholder="Contraseña"
                    secureTextEntry={ visiblePass }
                    style={{ width: 220 }}
                    value={ formik.values.password }
                    onChangeText={ (text) => formik.setFieldValue("password", text) }
                />
                <Icon
                    onPress={ passwordVisibility }
                    name={ isVisible }
                    size={ 23 }
                    color="#004aad"
                    style={{ padding: 5, marginLeft: 20 }}
                />
            </View>
            <Text style={{ color: "#dc3545", fontSize: 14, marginVertical: 10 }}>{ formik.errors.password }</Text>
            {/**
             * Component Button Handler (Reducer handler)
             */}
            <View style={ styles.bottomContainer }>
                <TouchableOpacity 
                    activeOpacity={ 0.6 }
                    onPress={ formik.handleSubmit }
                >
                    <View style={ styles.button }>
                        <Text style={ styles.buttonText }>CONTINUAR</Text>
                    </View>
                </TouchableOpacity>
                <Text>{error}</Text>
                <LoginBottomContainer />
            </View> 
        </View>
        {
            logging && 
            <View style={styles.activity} pointerEvents="none">
                <ActivityIndicator size="large" color="#e6f2ff" />
            </View>
        }
        </>
    );
}

const validationSchema = () => {
    return {
        email: Yup.string().required("El email es requerido").email("El email es incorrecto"),
        password: Yup.string().required("Ingresa una contraseña").min(8, "La contraseña debe tener como minimo 8 caracteres")
    }
}

const styles = StyleSheet.create({
    LoginContainer: {
        width: "100%",
        height: "100%",
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
        height: 100,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    customInputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    activity: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "100%",
        width: "100%",
        zIndex: 3,
        elevation: 3
    }
});