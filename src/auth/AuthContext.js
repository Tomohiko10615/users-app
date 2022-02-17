import React, { useState, createContext, useEffect } from "react";

// Crear el contexto. Estado inicial
export const AuthContext = createContext({
    auth: undefined,
    isLogOut: undefined,
    nombre: undefined,
    userData: undefined,
    context: undefined,
    token: undefined,
    distrito: undefined,
    distritoId: undefined,
    Login: () => {},
    Logout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(undefined);
    const [userData, setUserData] = useState(undefined);
    const [nombre, setNombre] = useState(undefined);
    const [context, setContext] = useState(undefined);
    const [isLogOut, setisLogOut] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [distrito, setDistrito] = useState(undefined);
    const [distritoId, setDistritoId] = useState(undefined);

    const Login = (auth, userData, nombre, context, distrito, distritoId) => {
        setAuth(auth);
        setUserData(userData);
        setNombre(nombre);
        setContext(context);
        setDistrito(distrito);
        setDistritoId(distritoId);
    };

    const Logout = () => {
        setAuth(undefined);
        setUserData(undefined);
        setNombre(undefined);
        setContext(undefined);
        setDistrito(undefined);
        setDistritoId(undefined);
        // setisLogOut(isLogOut: params);
    };

    const valueContext = {
        auth,
        userData,
        nombre,
        context,
        isLogOut,
        token,
        distrito,
        distritoId,
        Login,
        Logout
    }

    return(
        <AuthContext.Provider value={ valueContext }>
            { children }
        </AuthContext.Provider>
    );
}
