import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { ButtonSelected } from "./ButtomSelected";
import { BLOCKER_LIST } from "../../data/BlockerInfo";


const Blocker = ({ nombres, apellidos, avatar, distrito, reputacion }) => (
    <View style={ styles.blockerContainer }>
        <Image
            style={ styles.userAvatar } 
            source={ avatar }
        />
        <View style={ styles.infoContainer }>
            <Text style={ styles.fullName }>{ nombres } { apellidos }</Text>
            <View style={[ styles.subContainer, styles.separatorContainer ]}>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: "#f2f2f2" }}>{ distrito }</Text>
                <View style={ styles.subContainer }>
                    <Text style={{ color: "#ffffff" }}>{ reputacion }</Text>
                    <Icon 
                        name="md-star-sharp"
                        size={ 20 }
                        color="#ffb552"
                    />
                </View>
            </View>
            <ButtonSelected />
        </View>
    </View>
);

export const BlockerItem = () => {


    const renderBlocker = ({ item }) => {
        return(
            <Blocker 
                nombres={ item.nombres }
                apellidos={ item.apellidos }
                avatar={ item.avatar }
                distrito={ item.distrito }
                reputacion={ item.reputacion }
            />
        );
    }


    return(
        <FlatList 
            data={ BLOCKER_LIST }
            renderItem={ renderBlocker }
            keyExtractor={ item => item.id }
        />
    );
}

const styles = StyleSheet.create({
    blockerContainer: {
        backgroundColor: "#004aad",
        marginHorizontal: 20,
        marginBottom: 20,
        width: "90%",
        height: 150,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    fullName: {
        color: "#ffffff",
        fontSize: 18
    },
    userAvatar: {
        width: 100,
        height: 100
    },
    infoContainer: {
        width: 200,
        marginLeft: 20
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    separatorContainer: {
        justifyContent: "space-between"
    }
});