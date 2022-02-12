import React from "react";

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { RegisterBottomContainer } from "../../containers/RegisterBottomContainer";


import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";

export const RegisterContain = () => {

    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: (form) => {
            console.log("Enviando...");
            console.log(form);
        }
    });

    return(
        <View style={ styles.registerContain }>
            <View style={ styles.containHeader }>
                <Icon
                    onPress={() => navigation.goBack()}
                    style={ styles.iconBack } 
                    name="arrow-back"
                    size={ 20 }
                />
                <Text style={ styles.registerTitle }>REGISTRO</Text>
                <Text></Text>
            </View>
            <TextInput 
                placeholder="Nombres"
                style={ styles.input }
                value={ formik.values.firstname }
                onChangeText={(text) => formik.setFieldValue("firstname", text)}
            />
            <TextInput 
                placeholder="Apellidos"
                style={ styles.input }
                value={ formik.values.lastname }
                onChangeText={(text) => formik.setFieldValue("lastname", text)}
            />
            <TextInput 
                placeholder="Correo electronico"
                style={ styles.input }
                value={ formik.values.email }
                onChangeText={(text) => formik.setFieldValue("email", text)}
            />
            <TextInput 
                placeholder="Contraseña"
                style={ styles.input }
                secureTextEntry={ true }
                value={ formik.values.password }
                onChangeText={(text) => formik.setFieldValue("password", text)}
            />
            <TextInput 
                placeholder="Celular"
                style={ styles.input }
                value={ formik.values.phone }
                onChangeText={(text) => formik.setFieldValue("phone", text)}
            />

            <RegisterBottomContainer
                action={ formik.handleSubmit }
            />
        </View>
    );
}

function initialValues() {
    return {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: ""
    }
}

const styles = StyleSheet.create({
    registerContain: {
        width: "100%",
        height: "85%",
        backgroundColor: "#004aad",
        alignItems: "center"
    },
    containHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 30,
        alignItems: "center" 
    },
    iconBack: {
        backgroundColor: "#ffffff",
        borderRadius: 100,
        padding: 10
    },
    registerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff"
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 30
    }
});