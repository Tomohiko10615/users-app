import React from "react";

import { View } from "react-native";

import { HeaderLogin } from "../components/login/HeaderLogin";
import { RegisterContain } from "../components/register/RegisterContain";

import { register } from "../styles/styles";

/**
 * @using add navigation stack ( back to login props )
 */

export const RegisterScreen = () => {
    return(
        <View style={ register.container }>
            <HeaderLogin />
            <RegisterContain />
        </View>
    );
}

