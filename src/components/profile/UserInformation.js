import React, { useState, useLayoutEffect, useEffect } from "react";

import { View, KeyboardAvoidingView, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import useAuth from "../../hooks/useAuth";
import Button from "../../utils/Button";
import DropDownPicker from "react-native-dropdown-picker";

import { useNavigation } from "@react-navigation/native";
/**
 * 
 * @component DropPicker: Error en toda la Screen al cambiarlo por <Dropdown /> (Componente hijo)
 */

export const UserInformation = (props) => {
    const { cliente, distritos } = props;

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(undefined);
    const [items, setItems] = useState([]);

    const distritosList = []

    useEffect(() => {
        for (const [key, value] of Object.entries(distritos)) {
            distritosList.push({
                label: value.nombre, value: value.id
            })
        }
        setItems(distritosList);

    }, [distritos]);

    useEffect(() => {
        setValue(cliente.distritoId)
    }, [cliente]);

    console.log(cliente)

    const formik = useFormik({
        initialValues: {
            direccion: cliente.direccion,
            celular: cliente.celular,
            distritoId: cliente.distritoId
        },
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,

        onSubmit: async () => {
            try {

                const newClient = {
                    id: cliente.id,
                    direccion: formik.values.direccion,
                    distritoId: value,
                    usuario: {
                        celular: formik.values.celular
                    }
                };

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

                if (result) {
                    navigation.replace("SuccessNav", {
                        screen: "Success",
                        params: {
                            successMessage: "Su perfil se ha actualizado con éxito",
                            redirect: "Home",
                            navigation: navigation
                        }
                    });
                }
                return result;
            } catch (error) {
                throw error;
            }
        },
    });

    function validationSchema() {
        return {
            celular: Yup.string()
                .required("Ingrese un número móvil")
                .min(9, "Ingrese un número móvil válido")
                .max(9, "Ingrese un número móvil válido"),
        };
    }

    return (
        <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? "padding" : null} keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })} style={styles.informationContainer}>
            {cliente !== {} ? (<>
                <Text style={styles.text}>Distrito:</Text>
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
                <Text style={styles.text}>Dirección:</Text>
                <TextInput
                    style={styles.input}
                    value={formik.values.direccion}
                    onChangeText={(text) =>
                        formik.setFieldValue("direccion", text)
                    }
                />
                <Text style={styles.text}>Celular</Text>
                <TextInput
                    style={styles.input}
                    value={formik.values.celular}
                    onChangeText={(text) =>
                        formik.setFieldValue("celular", text)
                    }
                    keyboardType="numeric"
                />

                {formik.errors.celular ? (
                    <Text style={styles.error}>{formik.errors.celular}</Text>
                ) : (
                    <></>
                )}

                <Button
                    title="Actualizar perfil"
                    onPress={formik.handleSubmit}
                    backgroundColor="white"
                    textColor="blue"
                /></>) : (<></>)}
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    informationContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#004aad",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        paddingVertical: 40
    },
    text: {
        textAlign: "left",
        color: "white",
        marginBottom: 10,
        marginHorizontal: 15,
        fontSize: 15,
    },
    input: {
        marginBottom: 20,
        height: 40,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "white",
        width: "90%",
        alignSelf: "center",
        color: "blue",
        textAlignVertical: "center",
    },
    error: {
        textAlign: "center",
        marginBottom: 10,
        color: "#f00",
    },
});