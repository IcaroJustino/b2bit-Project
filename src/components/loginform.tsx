import { useState } from "react"
import hide from '../assets/hide.png'
import show from '../assets/seek.png'
import { Link, useNavigate } from "react-router-dom"
import { Login } from "../api/services"
import { LoginType } from "src/types/types"
import { ReactNode } from "react"
export default function LoginForm() {

    const [error, setError] = useState(false)
    const [errormsg, setErrorMsg] = useState('')
    const [showPassword, setShowpassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const inputstyle: string = "lg:w-[385.88px] md:w-[385.88px] w-[230px] h-[54.25px] bg-input rounded-small px-[18px] text-[16px] placeholder-opacity-80 "


    const loadingIcon: ReactNode = <svg aria-hidden="true" className="m-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>


    const formSubmit = async (event: any) => {
        setLoading(true)
        try {
            event.preventDefault();
            const userdata: LoginType = {
                "email": event.target.email.value,
                "password": event.target.password.value,
            }
            const apiAuth: any = await Login(userdata)
            if (apiAuth.msg == "sucess" && apiAuth.status == 200) {
                setLoading(false)
                setError(false)
                setErrorMsg('')
                navigate("/user", { replace: true })
            }
            if (apiAuth.status == 401) {
                setLoading(false)
                setError(true)
                setErrorMsg("Wrong E-mail or Password")
            }
        } catch (error: any) {
            setError(true)
            setErrorMsg("Something whent whrong ")
            throw new Error("Bad Request");
        }
    }

    return (
        <form className="lg:h-min-[288px] flex flex-col justify-evenly w-fit h-fit mx-auto" onSubmit={formSubmit}>
            {
                error && errormsg ?
                    <span className=" shadow-simple bg-red-500 bg-opacity-80 p-3 mb-[20px] lg:w-[385.88px] md:w-[385.88px] w-[230px] lg:text-base md:text-base text-sm rounded-small text-center">
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
                    <span className="mt-[24px]  lg:w-[385.88px] md:w-[385.88px] w-[230px] h-[54.25px] bg-submit flex justify-center rounded-small ">
                        {loadingIcon}
                    </span>
                    :
                    <input type="submit" value="Sign in" className="mt-[24px]  lg:w-[385.88px] md:w-[385.88px] w-[230px] h-[54.25px]  bg-submit text-brightwhite rounded-small hover:cursor-pointer"></input>
            }
        </form>
    )
};
