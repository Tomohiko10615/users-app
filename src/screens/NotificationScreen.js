import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Inbox from "../Inbox/Inbox";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export const NotificationScreen = () => {
    const [messageData, setMessageData] = useState([]);
  const [inicio, setInicio] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [endOfData, setEndOfData] = useState(false);
  const [messageCondition, setMessageCondition] = useState(false);
  const [messageItem, setMessageItem] = useState(undefined);

  const showMessageCondition = (item) => {
    setMessageCondition(true);
    setMessageItem(item);
  };

  const isFocused = useIsFocused();

  const getMessages = async () => {
    try {
      const url =
        "https://pasteblock.herokuapp.com/api/cliente/inbox?inicio=" + inicio;
      const response = await fetch(url);
      const result = await response.json();
      if (result.length != 0) {
        setMessageData([...messageData, ...result]);
        setInicio(inicio + 3);
      } else {
        setEndOfData(true);
      }
      setLoaded(true);
      return result;
    } catch (e) {
      console.log(e);
    }
  };

  useLayoutEffect(() => {
    if (isFocused == false) {
      setMessageData([]);
      setInicio(0);
      setLoaded(false);
      setEndOfData(false);
      setMessageCondition(false);
    } else {
      (async () => {
        await getMessages();
      })();
    }
  }, [isFocused]);

  useEffect(() => {
    if (messageData.length != 0) {
      setLoaded(true);
    }
  }, [messageData]);

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <View style={{ flexGrow: 1, justifyContent: "center" }}>
        {loaded ? (
          <Inbox
            messageData={messageData}
            getMessages={getMessages}
            endOfData={endOfData}
            showMessageCondition={showMessageCondition}
            messageCondition={messageCondition}
            messageItem={messageItem}
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
  scrollContainer: { flex: 1 },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
