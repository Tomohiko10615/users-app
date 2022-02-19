import "react-native-gesture-handler";
import React, { createRef, useEffect, useState, useRef } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { AuthNavigationStack } from "./src/navigation/AuthNavigationStack";
import { AuthProvider } from "./src/auth/AuthContext";
import * as Notifications from "expo-notifications";
import * as Linking from "expo-linking";
import { linking } from "./src/navigation/AuthNavigationStack";


const navigationRef = createRef();
const nav = () => navigationRef.current;


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [notification, setNotification] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState("");
  const notificationListener = useRef();
  const responseListener = useRef();
  const lastNotificationResponse = Notifications.useLastNotificationResponse();


  useEffect(() => {
    
    if (
      lastNotificationResponse && lastNotificationResponse.notification.request.content.title
       &&
      lastNotificationResponse.actionIdentifier ===
        Notifications.DEFAULT_ACTION_IDENTIFIER
    ) {
      if (
        lastNotificationResponse.notification.request.content.title ==
        "El blocker ha revisado tu solicitud"
      ) {
        
        Linking.openURL(Linking.createURL("/message"));
        
        //navigation.navigate("MessageStack");
        //linkTo("/message");
      } else {
        Linking.openURL(Linking.createURL("/service"));
        
      }
    }
  }, [lastNotificationResponse]);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return(
      <NavigationContainer linking={linking} ref={navigationRef}>
        <AuthProvider expoPushToken={expoPushToken}>
          <AuthNavigationStack nav={nav} />
        </AuthProvider>
      </NavigationContainer>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token.toString();
}
