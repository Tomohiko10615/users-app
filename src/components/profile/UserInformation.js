import React, { useState, useLayoutEffect, useEffect } from "react";

import { View, KeyboardAvoidingView, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import useAuth from "../../hooks/useAuth";
import Button from "../../utils/Button";
import DropDownPicker from "react-native-dropdown-picker";

import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
/**
 * 
 * @component DropPicker: Error en toda la Screen al cambiarlo por <Dropdown /> (Componente hijo)
 */

export const UserInformation = (props) => {
    const { cliente, distritos } = props;

    const navigation = useNavigation();
    const {height, width} = useWindowDimensions();
    const {Login, distrito } = useAuth();

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
                console.log(result);
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
        <View style={[styles.informationContainer, {marginHorizontal: 30}]}>
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
                    dropDownContainerStyle={{
                        backgroundColor: "#dfdfdf",
                        width: "85%",
                        marginHorizontal: 25,
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
                    backgroundColor="#004aad"
                    textColor="#ffffff"
                /></>) : (<></>)}
        </View>

    );
}

const styles = StyleSheet.create({
    informationContainer: {
        width: "85%",
        height: "60%",
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 5
    },
    text: {
        alignItems: "flex-start",
        color: "#747474",
        marginBottom: 10,
        marginHorizontal: 15,
        fontSize: 15,
        width: "85%",
        fontWeight: "bold"
    },
    input: {
        borderWidth: 0,
        marginBottom: 20,
        height: 40,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#999999",
        width: "85%",
        alignSelf: "center",
        color: "#747474",
        textAlignVertical: "center",
    },
    error: {
        textAlign: "center",
        marginBottom: 10,
        color: "#f00",
    },
});