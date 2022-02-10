import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";


export default function Success(props) {
  const { successMessage, redirect } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{successMessage}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(redirect)}
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
    backgroundColor: "blue",
    height: "100%",
  },

  text: {
    textAlign: "center",
    color: "white",
    textAlignVertical: "center",
    height: "50%",
    fontSize: 25,
    width: "80%",
    alignSelf: "center",
  },
});
