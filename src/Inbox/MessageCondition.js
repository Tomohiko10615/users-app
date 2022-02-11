import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";

import Button from "../utils/Button";

export default function MessageCondition(props) {
  const { messageItem } = props;
  const [accepted, setAccepted] = useState(undefined);
  const [posting, setPosting] = useState(false);
  const navigation = useNavigation();
  let source = "";
  switch (messageItem.servicio) {
    case "Albañilería":
      source = require("../../assets/serv1.png");
      break;
    case "Pintura":
      source = require("../../assets/serv2.png");
      break;
    case "Electricidad":
      source = require("../../assets/serv3.png");
      break;
    case "Gasfitería":
      source = require("../../assets/serv4.png");
      break;
    default:
      break;
  }


  useEffect(() => {
    if (accepted != null) {
      (async () => {
        await sendMessage();
        })();
    }
}, [accepted]);

  async function sendMessage () {
      setPosting(true);
      try {
        const newMensaje = {id: messageItem.id, estadoConfirmacionCliente: accepted}
       
        const response = await fetch(
          "https://pasteblock.herokuapp.com/api/enviar",
          {
            method: "POST",
            body: JSON.stringify(newMensaje),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setPosting(false);
 
        if (result) {
          let successMessage = "";
          if (accepted) {
            successMessage =
              "Haz aceptado el trabajo con las condiciones del blocker.";
          } else {
            successMessage = "Haz rechazado el trabajo.";
          }
          navigation.replace("SuccessNav", {
            screen: "Success",
            params: {
                successMessage: successMessage,
                redirect: "Home",
                navigation: navigation
            }
        });
        }
        return result;
      } catch (error) {
        throw error;
      }
  };

  return (
    <ScrollView>
      <View style={styles.messageConditionContainer}>
        <View style={styles.rowContainer}>
          <Image style={styles.servImage} source={source} />
          <View>
            <Text style={styles.messageDataText}>
              <Icon name="user" color="white" />
              {"   "} {messageItem.blocker}
            </Text>
          </View>
        </View>
        <Text style={styles.messageDataText}>Detalles:</Text>
        <View style={styles.secondaryContainer}>
          <Text style={styles.secondaryText}>{messageItem.mensajeBlocker}</Text>
        </View>
        <Text style={styles.messageDataText}>Tiempo estimado (días):</Text>
        <View style={styles.secondaryContainer}>
          <Text style={styles.secondaryText}>{messageItem.tiempoEstimado}</Text>
        </View>
        <Text style={styles.messageDataText}>Costo (S/.):</Text>
        <View style={styles.secondaryContainer}>
          <Text style={styles.secondaryText}>{messageItem.costo}</Text>
        </View>
        

        <View>
          {posting && (
            <ActivityIndicator
              size="large"
              color="white"
              style={styles.spinner}
            />
          )}
        </View>
        <Button
          title="Aceptar"
          onPress={() => {
            setAccepted(true);
            
          }}
          backgroundColor="green"
          textColor="white"
          style={styles.button}
        />
        <Button
          title="Rechazar"
          onPress={() => {
            setAccepted(false);
            
          }}
          backgroundColor="red"
          textColor="white"
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  messageConditionContainer: {
    backgroundColor: "blue",
    borderRadius: 30,
    marginVertical: 15,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
  },
  messageDataText: {
    color: "white",
    textAlignVertical: "center",
    marginVertical: 5,
    marginHorizontal: 15,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  inputRowContainer: {
    flexDirection: "row",
    marginBottom: 15,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  inputDataText: {
    color: "white",
    marginBottom: 5,
    textAlignVertical: "center",
    width: "50%",
  },
  secondaryContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    height: 80,
  },
  secondaryText: {
    textAlign: "left",
    color: "blue",
    marginVertical: 15,
    marginHorizontal: 15,
  },
  servImage: {
    width: 60,
    height: 60,
    alignSelf: "flex-start",
    margin: 15,
    backgroundColor: "white",
    borderRadius: 30,
  },
  multilineInput: {
    height: 80,
    marginBottom: 15,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    color: "blue",
    textAlignVertical: "top",
  },
  input: {
    height: 30,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
    width: "50%",
  },
  button: {
    textAlign: "center",
    paddingHorizontal: 12,
  },
  error: {
    textAlign: "center",
    marginBottom: 10,
    color: "#f00",
  },
  spinner: {
    marginBottom: 10,
  },
});
