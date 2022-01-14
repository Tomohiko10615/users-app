import React, { useReducer } from "react";

import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";


export const Dropdown = () => {

    const options = {
        option_1: "Villa el Salvador",
        option_2: "Chorrillos",
        option_3: "Surco",
        option_4: "Miraflores"
    }

    const { option_1, option_2, option_3, option_4 } = options;

    return(
        <View style={ styles.dropContainer }>
            <Text style={ styles.options }>{ option_1 }</Text>
            <Icon 
                name="caret-down-sharp"
                size={ 14 }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dropContainer: {
        width: 160,
        backgroundColor: "#ffffff",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    options: {
        color: "#999999"
    }
});