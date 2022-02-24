import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

import Service from "../Service/Service";
import { Header } from "../components/home/Header";
import useAuth from "../hooks/useAuth";

export const ContractsScreen = () => {
  const isFocused = useIsFocused();
  const [serviceData, setServiceData] = useState([]);
  const [inicio, setInicio] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [endOfData, setEndOfData] = useState(false);
  const [serviceDetails, setServiceDetails] = useState(undefined);
  const [serviceItem, setServiceItem] = useState(undefined);
  const [finalizado, setFinalizado] = useState(false);

  const [render, setRender] = useState(false);

  const { JWTtoken } = useAuth();

  const showServiceDetails = (item, state) => {
    setServiceDetails(state);
    setServiceItem(item);
    console.log(item);
  };

  useEffect(() => {
    (async () => {
      setServiceData([]);
      setInicio(0);
      setEndOfData(false);
      setLoaded(false);
      setRender(!render);
    })();
  }, [finalizado]);

  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + JWTtoken);

  const getServices = async () => {
    try {
      const url =
        "https://pasteblock.herokuapp.com/api/cliente/historial?inicio=" +
        inicio +
        "&finalizado=" +
        finalizado;
      const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        headers: myHeaders,
      });
      const result = await response.json();

      if (result.length != 0) {
        setServiceData([...serviceData, ...result]);
        setInicio(inicio + 5);
      } else {
        setEndOfData(true);
      }
      setLoaded(true);
      console.log(serviceData);
      return result;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (serviceData.length != 0) {
      setLoaded(true);
    }
  }, [serviceData]);

  useLayoutEffect(() => {
    if (isFocused == false) {
      setServiceData([]);
      setInicio(0);
      setLoaded(false);
      setEndOfData(false);
      showServiceDetails(undefined, undefined);
      setFinalizado(false);
    } else {
      (async () => {
        await getServices();
      })();
    }
  }, [isFocused, render]);

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <View style={{ flexGrow: 1, justifyContent: "center" }}>
        <Header />
        {loaded ? (
          <Service
            serviceData={serviceData}
            getServices={getServices}
            endOfData={endOfData}
            showServiceDetails={showServiceDetails}
            serviceDetails={serviceDetails}
            serviceItem={serviceItem}
            finalizado={finalizado}
            setFinalizado={setFinalizado}
          />
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flex: 1, marginTop: 31 },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
