import { LoginType } from "./api";

import { api } from "./api";

export const Login = async ({ email, password }: LoginType) => {
    try {
        if (!email || !password) {
            throw new Error("Bad Request: Email and password are required.");
        }
        const response = await api.post("/auth/login", { email, password });
        const { data } = response;

        if (data.accessToken) {
            //localStorage.setItem("token", data.accessToken);
            //localStorage.setItem("access_token", data.accessToken); // cria um token que vai expirar em 1 dia
            //sessionStorage.setItem("userId", data.userData.id);
            return {
                msg: "Sucess",
                userData: data.userData,
            };


        }
    } catch (error) {
        return {
            error: error
        }
    }
}

export const GetUserdata = async () => {

}