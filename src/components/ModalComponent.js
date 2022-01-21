import React, { useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

export const ModalComponent = ({ open, setOpen }) => {

    const [modalOpen] = useState(open);
    
    const closeModal = () => {
        setOpen(!modalOpen);
    }

    return (
        <Modal transparent={true} animationType="fade">
            <View 
                style={{
                backgroundColor: "#ffffff",
                borderRadius: 20,
                width: 250,
                height: 200,
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                position: "absolute",
                alignSelf: "center",
                bottom: "40%",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5    
            }}>
                <Text style={{ marginBottom: 20 }}>Ingrese los datos correctos</Text>
                <TouchableOpacity 
                    style={ styles.buttonBase }
                    activeOpacity={ 0.7 }
                    onPress={ closeModal }
                >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>OK</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    buttonBase: {
        backgroundColor: "#004aad",
        paddingVertical: 10, paddingHorizontal: 20,
        borderRadius: 15 
    }
});