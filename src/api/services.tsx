import { LoginType } from "../types/types";
import { api } from "./api";

export const Login = async ({ email, password }: LoginType) => {
    try {
        if (!email || !password) {
            throw new Error("Bad Request: Email and password are required.");
        }
        const response = await api.post("/auth/login/", { email, password });
        const data: any = response

        if (data) {
            sessionStorage.setItem("refresh_token", data.data.tokens.refresh);
            sessionStorage.setItem("acess_token", data.data.tokens.access);
            return {
                msg: "sucess",
                response: data,
                status: data.status
            };
        }
    } catch (error: any) {
        return {
            msg: error,
            response: error.message,
            status: error.response.status
        };
    }
}



export const GetUserdata = async (token: any) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await api.get("/auth/profile/", config)
        const data: any = response
        return {
            msg: "sucess",
            response: data.data,
            status: data
        }
    } catch (error) {
        return {
            msg: error,
            response: error,
            status: error
        };
    }
}


export const getToken = () => sessionStorage.getItem("acess_token");


export const deletTokens = () => {
    sessionStorage.removeItem("acess_token");
    sessionStorage.removeItem("refresh_token");
}