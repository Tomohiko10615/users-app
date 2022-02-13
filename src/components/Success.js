import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";


export default function Success(props) {
  const { successMessage, redirect, navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{successMessage}</Text>
      <TouchableOpacity
        onPress={() => navigation.replace(redirect)}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Volver al inicio</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },

  text: {
    textAlign: "center",
    color: "blue",
    textAlignVertical: "center",
    height: "50%",
    fontSize: 25,
    width: "80%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 15,
    width: "80%",
    alignSelf: "center"
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",

  }

});
