import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { RegisterButton } from "../components/register/RegisterButton";

export const RegisterBottomContainer = ({ action }) => {

    const [ checkTerms, setCheckTerms ] = useState(false);
    const [ checkPoliticy, setCheckPoliticy ] = useState(false);

    let isEnabled = checkTerms ? "checkbox" : "checkbox-outline";
    let isChecked = checkPoliticy ? "checkbox" : "checkbox-outline";

    const handleCheckTerms = () => {
        setCheckTerms(!checkTerms);
    }

    const handleCheckPoliticy = () => {
        setCheckPoliticy(!checkPoliticy);
    }

    return(
        <View style={ styles.bottomContainer }> 
            <View style={ styles.checkContainer }>
                <View style={ styles.checkItem }>
                    <Icon
                        onPress={ handleCheckTerms } 
                        name={ isEnabled }
                        size={ 20 }
                        color="#ffffff"
                    />
                    <Text style={ styles.rulesText }>Acepto terminos y condiciones</Text>
                </View>
                <View style={ styles.checkItem }>
                    <Icon
                        onPress={ handleCheckPoliticy }
                        name={ isChecked }
                        size={ 20 }
                        color="#ffffff"
                    />
                    <Text style={ styles.rulesText }>Politicas de privacidad</Text>
                </View>
            </View>
            <RegisterButton 
                action={ action }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        width: "100%",
        height: 130,
        alignItems: "center",
        justifyContent: "space-between"
    },
    rulesText: {
        color: "#ffffff",
        marginLeft: 10
    },
    checkItem: {
        flexDirection: "row"
    },
    checkContainer: {
        paddingTop: 10
    }
});

