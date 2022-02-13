import React from "react";
import { View } from "react-native";
import Success from "../components/Success";
import { useNavigation } from "@react-navigation/native";

export const SuccessScreen = ({ route }) => {
  
  const { successMessage, redirect, navigation } = route.params;

  return (
    <View>
      <Success
        navigation={navigation}
        successMessage={successMessage}
        redirect={redirect}
      />
    </View>
  );
}
