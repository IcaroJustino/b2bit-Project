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
            console.log("AAAAAAAAAAAAA", data.data.tokens)
            sessionStorage.setItem("refresh_token", data.data.tokens.refresh);
            sessionStorage.setItem("acess_token", data.data.tokens.access);
            return {
                msg: "sucess",
                response: data
            };
        }
    } catch (error) {
        return {
            error
        }
    }
}



export const GetUserdata = async () => {

}