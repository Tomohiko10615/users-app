import React, { createContext } from "react";
import { Usuario } from "../data/User";

/**
 * Contexto de ejemplo - prueba
 */
const AuthMethods = {
    signUp: function() {},
    signOut: function() {},
    logOut: function() {}
}                                                               

const AuthContextProps = {
    errorMessage: "",
    token: "",
    user: Usuario,
    status: "checking" | "authenticated" | "not-authenticated",
    AuthMethods
    
}


export const AuthContext = createContext({ AuthContextProps });

export const AuthProvider = ({ children }) => {
    return(
        <AuthContext.Provider value={{

        }}>
            { children }
        </AuthContext.Provider>
    );
}
