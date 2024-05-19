import { ReactNode } from "react";

export interface LoginType {
    email: string;
    password: string;
}
export interface UserType {
    data: {
        id: string;
        avatar: {
            id: number,
            high: string,
            low: string
            medium: string
        },
        name: string,
        last_name: string,
        email: string,
        role: {
            value: number,
            label: string
        },
        last_login: string,
        staff_role: {
            value: number
            label: string
        }
    }

}

export interface TokenType {
    refresh_token: string | null;
    acess_token: string | null;
}

export interface PrivateRoute {
    children: ReactNode;
}