import React from "react";

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { RegisterBottomContainer } from "../../containers/RegisterBottomContainer";

import { useForm } from "../../hooks/useForm";
import { useNavigation } from "@react-navigation/native";

export const RegisterContain = () => {

    const navigation = useNavigation();

    const hole = "";

    const { firstname, lastname, email, district, phone, password, onChange } = useForm({
        firstname: "",
        lastname: "",
        email: "",
        district: "",
        phone: "",
        password: ""
    });

    const onRegister = () => {
        Keyboard.dismiss();

        if( firstname == "" || lastname == "" || email == "" || district == "" || phone == "" || password == "") {
            console.log("Entradas de texto vacias");
        } else {
            console.log("Correcto");
            navigation.replace("Home");
        }
    }

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
                <Text>{ hole }</Text>
            </View>
            <TextInput 
                placeholder="Nombres"
                style={ styles.input }
                onChangeText={ (value) => onChange(value, "firstname") }
                value={ firstname }
                onSubmitEditing={ onRegister }
            />
            <TextInput 
                placeholder="Apellidos"
                style={ styles.input }
                onChangeText={ (value) => onChange(value, "lastname") }
                value={ lastname }
                onSubmitEditing={ onRegister }
            />
            <TextInput 
                placeholder="Correo electronico"
                style={ styles.input }
                onChangeText={ (value) => onChange(value, "email") }
                value={ email }
                onSubmitEditing={ onRegister }
            />
            <TextInput 
                placeholder="Contraseña"
                style={ styles.input }
                onChangeText={ (value) => onChange(value, "password") }
                value={ password }
                onSubmitEditing={ onRegister }
                secureTextEntry={ true }
            />
            <TextInput 
                placeholder="Celular"
                style={ styles.input }
                onChangeText={ (value) => onChange(value, "phone") }
                value={ phone }
                onSubmitEditing={ onRegister }
            />
            <TextInput 
                placeholder="Distrito"
                style={ styles.input }
                onChangeText={ (value) => onChange(value, "district") }
                value={ district }
                onSubmitEditing={ onRegister }
            />

            <RegisterBottomContainer
                action={ onRegister }
            />
        </View>
    );
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