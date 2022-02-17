import React, { useState, createContext, useEffect } from "react";

// Crear el contexto. Estado inicial
export const AuthContext = createContext({
    auth: undefined,
    token: undefined,
    isLogOut: undefined,
    name: undefined,
    userData: undefined,
    context: undefined,
    Login: () => {},
    Logout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(undefined);
    const [userData, setUserData] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [context, setContext] = useState(undefined);
    const [isLogOut, setisLogOut] = useState(undefined);
    const [token, setToken] = useState(undefined);

    const Login = (auth, userData, name, context) => {
        setAuth(auth);
        setUserData(userData);
        setName(name);
        setContext(context);
    };

    const Logout = (isLogOut) => {
        setAuth(undefined);
        setUserData(undefined);
        setName(undefined);
        setContext(undefined);
        setisLogOut(isLogOut);
    };

    const valueContext = {
        auth,
        token,
        isLogOut,
        name,
        userData,
        context,
        Login,
        Logout
    }

    return(
        <AuthContext.Provider value={ valueContext }>
            { children }
        </AuthContext.Provider>
    );
}
