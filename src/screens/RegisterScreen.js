import React from "react";

import { View, ScrollView } from "react-native";

import { HeaderLogin } from "../components/login/HeaderLogin";
import { RegisterContain } from "../components/register/RegisterContain";

import { register } from "../styles/styles";

/**
 * @using add navigation stack ( back to login props )
 */

export const RegisterScreen = () => {
    return(
        <ScrollView nestedScrollEnabled={true} style={ register.container }>
            <HeaderLogin />
            <RegisterContain />
        </ScrollView>
    );
}

