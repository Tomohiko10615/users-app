import React, { useState, createContext, useEffect } from "react";

// Crear el contexto. Estado inicial
export const AuthContext = createContext({
    auth: undefined,
    isLogOut: undefined,
    nombre: undefined,
    userData: undefined,
    JWTtoken: undefined,
    token: undefined,
    clienteId: undefined,
    distrito: undefined,
    distritoId: undefined,
    token: undefined,
    Login: () => {},
    Logout: () => {}
});

export function AuthProvider(props) {
    const [auth, setAuth] = useState(undefined);
    const [userData, setUserData] = useState(undefined);
    const [nombre, setNombre] = useState(undefined);
    const [JWTtoken, setJWTtoken] = useState(undefined);
    const [isLogOut, setisLogOut] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [clienteId, setClienteId] = useState(undefined);
    const [distrito, setDistrito] = useState(undefined);
    const [distritoId, setDistritoId] = useState(undefined);
    const { children, expoPushToken } = props;

    useEffect(() => {
        setToken(expoPushToken);
      }, [expoPushToken]);

    const Login = (auth, userData, nombre, JWTtoken, clienteId, distrito, distritoId) => {
        setAuth(auth);
        setUserData(userData);
        setNombre(nombre);
        setJWTtoken(JWTtoken);
        setClienteId(clienteId);
        setDistrito(distrito);
        setDistritoId(distritoId);
    };

    const Logout = () => {
        setAuth(undefined);
        setUserData(undefined);
        setNombre(undefined);
        setJWTtoken(undefined);
        setDistrito(undefined);
        setDistritoId(undefined);
        // setisLogOut(isLogOut: params);
    };

    const valueContext = {
        auth,
        userData,
        nombre,
        JWTtoken,
        isLogOut,
        token,
        clienteId,
        distrito,
        distritoId,
        token,
        Login,
        Logout
    }

    return(
        <AuthContext.Provider value={ valueContext }>
            { children }
        </AuthContext.Provider>
    );
}
