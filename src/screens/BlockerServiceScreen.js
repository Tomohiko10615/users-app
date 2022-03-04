import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView, LogBox } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlockerItem } from "../components/BlockersList/BlockerItem";
import useAuth from "../hooks/useAuth";


export const BlockerServiceScreen = ({route}) => {
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);

    const { service, serviceId } = route.params;
    const [blockersList, setBlockersList] = useState([]);
    
    const { distritoId } = useAuth();

    async function getBlockers() {
        try {
          const url = "https://pasteblock.herokuapp.com/api/listar/" + serviceId + "/" + distritoId + "?orden=1&inicio=0&total=5";
          const response = await fetch(url);
          const result = await response.json();
          setBlockersList(result);
         
          return response;
        } catch (e) {
          console.log(e);
        }
      }
    
    useLayoutEffect(() => {
        (async () => {
        await getBlockers();
        })();
    }, [serviceId]);


    return(
        <SafeAreaView>
            <ScrollView nestedScrollEnabled={ true }>
                <View style={ styles.blockersList }>
                    <View style={ styles.ubicationRoute }>
                        <Text style={ styles.label }>Categoria: </Text>
                        <Text style={ styles.category } >{ service }</Text>
                    </View>
                    <Text style={ styles.sectionTitle }>BLOCKERS</Text>
                </View>
                <View style={ styles.blockerListContainer }>
                    {/* Flatlist Component's error in console: advisament */}
                    <BlockerItem blockersList={blockersList} serviceId={serviceId}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ubicationRoute: {
        flexDirection: "row",
        marginBottom: 20
    },
    blockersList: {
        backgroundColor: "#f3f6f9",
        width: "100%",
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333333"
    },
    label: {
        color: "#747474"
    },
    category: {
        color: "#333333",
        fontWeight: "bold"
    },
    blockerListContainer: {
        marginVertical: 20
    }
});