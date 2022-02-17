import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";


export default function Success(props) {
  const { successMessage, redirect, navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar 
        translucent backgroundColor={ "#004aad" }
      />
      <Text style={styles.text}>{successMessage}</Text>
      <TouchableOpacity
        onPress={() => navigation.replace(redirect)}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>VOLVER AL INICIO</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#004aad",
    height: "100%",
    width: "100%"
  },

  text: {
    textAlign: "justify",
    color: "#ffffff",
    textAlignVertical: "center",
    height: "70%",
    fontSize: 25,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 35
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 15,
    width: "80%",
    alignSelf: "center"
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    fontSize: 16

  }

});
