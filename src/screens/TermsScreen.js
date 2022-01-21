import React, { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
import { ModalComponent } from "../components/ModalComponent";

export const TermsScreen = () => {

    const [modal, setModal] = useState(false);
    let isOpen = modal ? <ModalComponent open={ modal } setOpen={ setModal }/> : null

    const openModal = () => {
        setModal(!modal)
    }

    let isVisible = modal ? "#00000080" : "#ffffff";

    return (
        <View style={{ 
            flex: 1, 
            backgroundColor: isVisible,
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
        }}>
            { isOpen }
            <TouchableOpacity onPress={ openModal }>
                <Text>Mostrar</Text>
            </TouchableOpacity>
        </View>
    );
}


