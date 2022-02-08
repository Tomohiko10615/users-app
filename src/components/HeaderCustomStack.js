import React from 'react'

import { View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";

import { useNavigation } from '@react-navigation/native';

export const HeaderCustomStack = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "transparent", position: "absolute", bottom: 4, left: 0 }}>
            <TouchableHighlight underlayColor="#dddddd">
                <Icon 
                    name="arrow-back-sharp"
                    size={ 24 }
                    color="#000000"
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: 100,
                        padding: 8,
                        marginLeft: 10
                    }}
                    onPress={() => navigation.goBack()}
                />
            </TouchableHighlight>
        </SafeAreaView>
    )
}
