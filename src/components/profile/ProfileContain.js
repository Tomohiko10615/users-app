import React, { useState, useLayoutEffect, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { UserAvatar } from "./UserAvatar";
import { UserInformation } from "./UserInformation";
import useAuth from "../../hooks/useAuth";

export const ProfileContain = () => {
    const {distrito, userData} = useAuth();
    const [profileData, setProfileData] = useState();
    const [cliente, setCliente] = useState();
    const [listaDistritos, setListaDistritos] = useState("");
    async function getDistritos() {
        try {
          const url = "https://pasteblock.herokuapp.com/api/distritos/";
          const response = await fetch(url);
          setListaDistritos(await response.json());
        } catch (e) {
          console.log(e);
        }
      }

      async function getUserData() {
        try {
          const url = "https://pasteblock.herokuapp.com/api/cliente/" + userData;
          const response = await fetch(url);
          setProfileData(await response.json());
        } catch (e) {
          console.log(e);
        }
      }
    
      useLayoutEffect(() => {
        (async () => {
          await getDistritos();
          await getUserData();
        })();
      }, []);

      useEffect(() => {
        if (profileData != undefined) {
          setCliente(profileData);
          
        }
      }, [profileData]);

    return(
        <ScrollView style={ styles.profileContainer }>
            { cliente ? (<><UserAvatar reputacion={cliente.reputacion} />
            <UserInformation cliente={cliente} distritos={listaDistritos}/></>) : (<></>)}
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: "#f3f6f9",
        width: "100%"
    }
});