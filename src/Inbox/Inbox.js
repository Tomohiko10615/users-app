import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import MessageList from "./MessageList";
import MessageCondition from "./MessageCondition";

export default function Inbox(props) {
  const {
    messageData,
    getMessages,
    endOfData,
    showMessageCondition,
    messageCondition,
    messageItem,
  } = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.secondaryContainer}>
        <Text style={styles.secondaryText}>
          {messageCondition ? <>Condiciones</> : <>Solicitudes</>}
        </Text>
      </View>
      {messageCondition ? (
        <MessageCondition messageItem={messageItem} />
      ) : (
        <MessageList
          messages={messageData}
          getMessages={getMessages}
          endOfData={endOfData}
          showMessageCondition={showMessageCondition}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "flex-start",
    flex: 1,
    paddingTop: 30
  },
  secondaryContainer: {
    backgroundColor: "#004aad",
    borderRadius: 30,
    marginBottom: 15,
    marginVertical: 30,
    width: "60%",
    alignSelf: "center",
    paddingVertical: 15 / 2,
  },
  secondaryText: {
    textAlign: "center",
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  messageContainer: {
    backgroundColor: "blue",
    borderRadius: 30,
    marginBottom: 15,
    marginVertical: 30,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
  },
  messageDataText: {
    color: "white",
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  servImage: {
    width: 60,
    height: 60,
    alignSelf: "flex-start",
    margin: 15,
    backgroundColor: "white",
    borderRadius: 30,
  },
  button: {
    textAlign: "center",
    paddingHorizontal: 12,
  },
});
