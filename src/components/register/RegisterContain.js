import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { RegisterBottomContainer } from "../../containers/RegisterBottomContainer";


import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";
import * as Yup from "yup";

import DropDownPicker from 'react-native-dropdown-picker';

export const RegisterContain = () => {

    const navigation = useNavigation();

    const hole = "";

    const [loading, setLoading] = useState(false);
    const [distritos, setDistritos] = useState({});

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);


    async function getDistritos() {
        try {
            const url = "https://pasteblock.herokuapp.com/api/distritos/";
            const response = await fetch(url);
            setDistritos(await response.json());
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        (async () => {
            await getDistritos();
        })();
    }, []);

    const distritosList = []

    useEffect(() => {
        for (const [key, value] of Object.entries(distritos)) {
            distritosList.push({
                label: value.nombre, value: value.id
            })
        }
        setItems(distritosList);

    }, [distritos]);

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            email: "",
            celular: "",
            direccion: "",
            distritoId: null,
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,

        onSubmit: async () => {
            setLoading(true);
            delete formik.values["confirmPassword"];

            const distritoId = formik.values.distritoId;
            delete formik.values["distritoId"];

            const newUser = formik.values;
            const newClient = { usuario: newUser, distritoId: distritoId, direccion: formik.values.direccion };
            console.log(JSON.stringify(newClient));
            try {
                const response = await fetch(
                    "https://pasteblock.herokuapp.com/api/cliente/form",
                    {
                        method: "POST",
                        body: JSON.stringify(newClient),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const result = await response.json();
                setLoading(false);
                console.log(result);



                if (result.id != null) {
                    const url = "https://pasteblock.herokuapp.com/api/token";
                    const usuario = { tokenDispositivo: token };

                    try {
                        const response = await fetch(url, {
                            method: "POST",
                            body: JSON.stringify(usuario),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        const resultToken = await response.json();
                    } catch (error) {
                        throw error;
                    }
                    navigation.replace("Home");
                    return result;
                }

            } catch (error) {
                throw error;
            }
        },
    });


    return (
        <View style={styles.registerContain}>
            <View style={styles.containHeader}>
                <Icon
                    onPress={() => navigation.goBack()}
                    style={styles.iconBack}
                    name="arrow-back"
                    size={20}
                />
                <Text style={styles.registerTitle}>REGISTRO</Text>
                <Text>{hole}</Text>
            </View>
            <TextInput
                placeholder="Nombres"
                style={styles.input}
                onChangeText={(value) => formik.setFieldValue("nombre", value)}
                value={formik.values.nombre}
            //onSubmitEditing={ onRegister }
            />
            {formik.errors.nombre && (
                <Text style={styles.error}>{formik.errors.nombre}</Text>
            )}
            <TextInput
                placeholder="Apellidos"
                style={styles.input}
                onChangeText={(value) => formik.setFieldValue("apellido", value)}
                value={formik.values.apellido}
            //onSubmitEditing={ onRegister }
            />
            {formik.errors.apellido && (
                <Text style={styles.error}>{formik.errors.apellido}</Text>
            )}
            <TextInput
                placeholder="Correo electronico"
                style={styles.input}
                onChangeText={(value) => formik.setFieldValue("email", value)}
                value={formik.values.email}
            //onSubmitEditing={ onRegister }
            />
            {formik.errors.email && (
                <Text style={styles.error}>{formik.errors.email}</Text>
            )}
            <TextInput
                placeholder="Contraseña"
                style={styles.input}
                onChangeText={(value) => formik.setFieldValue("password", value)}
                value={formik.values.password}
                //onSubmitEditing={ onRegister }
                secureTextEntry={true}
            />
            {formik.errors.password && (
                <Text style={styles.error}>{formik.errors.password}</Text>
            )}
            <TextInput
                placeholder="Confirmar Contraseña"
                style={styles.input}
                onChangeText={(value) => formik.setFieldValue("confirmPassword", value)}
                value={formik.values.confirmPassword}
                //onSubmitEditing={ onRegister }
                secureTextEntry={true}
            />
            {formik.errors.confirmPassword && (
                <Text style={styles.error}>{formik.errors.confirmPassword}</Text>
            )}
            <TextInput
                placeholder="Celular"
                style={styles.input}
                onChangeText={(value) => formik.setFieldValue("celular", value)}
                value={formik.values.celular}
            //onSubmitEditing={ onRegister }
            />
            {formik.errors.celular && (
                <Text style={styles.error}>{formik.errors.celular}</Text>
            )}
            <TextInput
                placeholder="Dirección"
                style={styles.input}
                onChangeText={(value) => formik.setFieldValue("direccion", value)}
                value={formik.values.direccion}
            //onSubmitEditing={ onRegister }
            />
            {formik.errors.direccion && (
                <Text style={styles.error}>{formik.errors.direccion}</Text>
            )}

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                style={styles.input}
                placeholder="Selecciona un distrito"
                searchable={true}
                language="ES"
                onChangeValue={(value) => {
                    formik.setFieldValue("distritoId", value)
                }}
            />

            {formik.errors.distritoId && (
                <Text style={styles.error}>{formik.errors.distritoId}</Text>
            )}

            <View style={styles.spinner}>
                {loading && <ActivityIndicator size="large" color="white" />}
            </View>

            <RegisterBottomContainer
                action={formik.handleSubmit}
            />
        </View>
    );
}

function validationSchema() {
    return {
        nombre: Yup.string().required("Ingrese su nombre"),
        apellido: Yup.string().required("Ingrese sus apellidos"),
        email: Yup.string()
            .required("Ingrese un email"),
        celular: Yup.string()
            .required("Ingrese un número móvil")
            .min(9, "Ingrese un número móvil válido")
            .max(9, "Ingrese un número móvil válido"),
        direccion: Yup.string()
            .required("Ingrese su dirección"),
        password: Yup.string()
            .required("Ingrese una contraseña")
            .min(
                8,
                "La contraseña es muy corta, debe tener 8 caracteres como mínimo"
            ),
        distritoId: Yup.string().nullable("Seleccione un distrito").required("Seleccione un distrito"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Las contraseñas deben coincidir"
        ),
    };
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
        marginBottom: 10,
        alignSelf: "center",
        borderColor: "#ffffff"
    },
    spinner: {
        marginBottom: 15,
    },
    error: {
        textAlign: "center",
        marginBottom: 10,
        color: "#f00",
    },
});