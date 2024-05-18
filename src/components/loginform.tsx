import { useState, useEffect } from "react"
import hide from '../assets/hide.png'
import show from '../assets/seek.png'
import { Link, useNavigate } from "react-router-dom"
import { Login } from "../api/services"
import { LoginType } from "src/types/types"
import { api } from "src/api/api"

export default function LoginForm() {

    const [error, setError] = useState(false)
    const [errormsg, setErrorMsg] = useState('Error')
    const [showPassword, setShowpassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const inputstyle: string = "lg:w-[385.88px] md:w-[385.88px] w-[230px] h-[54.25px] bg-input rounded-small px-[18px] text-[16px] placeholder-opacity-80 "


    const formSubmit = async (event: any) => {
        event.preventDefault();
        try {

            const userdata: LoginType = {
                "email": event.target.email.value,
                "password": event.target.password.value,
            }
            console.log("userData", userdata)

            const apiAuth: any = await Login(userdata)

            if (apiAuth.msg) {
                navigate("/user");
            }
        } catch (err: any) {
            return err
        }
    }

    return (
        <form className="lg:h-min-[288px] flex flex-col justify-evenly w-fit h-fit mx-auto" onSubmit={formSubmit}>
            {
                error && errormsg ?
                    <span className=" shadow-simple bg-red-500 bg-opacity-80 p-3 mb-[20px] lg:w-[385.88px] md:w-[385.88px] w-[230px] rounded-small">
                        {errormsg}
                    </span> :
                    null
            }
            <label className="mb-[9px] font-bold text-[16px] ">E-mail</label>
            <input type="email" className={inputstyle} placeholder="e-mail" onChange={() => { }} required={true} name="email" id="email"></input>
            <label className="mb-[9px] font-bold text-[16px] my-[10px]">Password</label>
            <div className="relative">
                <img className="absolute right-3 top-3  " src={showPassword && showPassword == true ? show : hide} alt={"b2bitlogo"} aria-readonly={true}
                    onClick={() => { setShowpassword(!showPassword) }}
                />
                <input type={showPassword && showPassword == true ? "text" : "password"} className={inputstyle} onChange={() => { }} required={true} name="password" id="password"></input>
            </div>
            <label className="flex mt-6 mb-0">
                <input className=" inline-block w-[24px] h-[24px] mr-2 mt-1 " name="keepLogin" type="checkbox" id="keepLogin" />
                <span className="text-base inline-block font-bold mt-1">
                    Keep me Signed in
                </span>
            </label>
            <Link className="mt-6 font-semibold " to={"/user"}>Forgot Password?</Link>
            {
                loading && loading == true ?
                    <input type="submit" value="Signin" className="mt-[24px]  lg:w-[385.88px] md:w-[385.88px] w-[230px] h-[54.25px]  bg-submit text-brightwhite rounded-small"></input>
                    :
                    <input type="submit" value="Sign in" className="mt-[24px]  lg:w-[385.88px] md:w-[385.88px] w-[230px] h-[54.25px]  bg-submit text-brightwhite rounded-small"></input>
            }
        </form>
    )
};
