import { Usuario } from "../data/User";

export const AuthState = {
    status: "",
    token: "",
    errorMessage: "",
    user: Usuario
}



const AuthAction = [
    { type: "signUp", payload: { token: "", user: Usuario } },
    { type: "addError", payload: "" },
    { type: "removeError" },
    { type: "notAuthenticated" },
    { type: "logout" } 
]


export const AuthReducer = ( state, action ) => {

    switch(action.type) {
        case "addError":
            return {
                ...state,
                user: null,
                status: "not-authenticated",
                token: null,
                errorMessage: action.payload
            };
        
        case "removeError":
            return {
                ...state,
                errorMessage: ""
            };
            
        case "signUp": 
            return {
                ...state,
                errorMessage: "",
                status: "authenticated",
                token: action.payload.token,
                user: action.payload.user
            }

        case "logout":
        case "notAuthenticated":
            return {
                ...state,
                status: "not-authenticated",
                token: null,
                user: null
            }

        default:
            return state;
    }

}