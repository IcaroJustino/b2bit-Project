import { useState, useEffect } from "react"
import hide from '../assets/hide.png'
import show from '../assets/seek.png'

export default function LoginForm() {

    const [error, setError] = useState(false)
    const [errormsg, setErrorMsg] = useState('Error')
    const [showPassword, setShowpassword] = useState(false)


    const inputstyle: string = "lg:w-[385.88px] md:w-[385.88px] w-[230px] h-[54.25px] bg-input rounded-small px-[18px] text-[16px] placeholder-opacity-80 "

    return (
        <form className="lg:h-min-[288px] flex flex-col justify-evenly w-fit h-fit mx-auto">
            {
                error && errormsg ?
                    <span className=" shadow-simple bg-red-500 bg-opacity-80 p-3 mb-[20px] lg:w-[385.88px] md:w-[385.88px] w-[230px] rounded-small">
                        {errormsg}
                    </span> :
                    null
            }
            <label className="mb-[9px] font-bold text-[16px] ">E-mail</label>
            <input type="email" className={inputstyle} placeholder="e-mail" onChange={() => { }} required={true}></input>
            <label className="mb-[9px] font-bold text-[16px] my-[10px]">Password</label>
            <div className="relative">
                <img className="absolute right-3 top-3  " src={showPassword && showPassword == true ? show : hide} alt={"b2bitlogo"} aria-readonly={true}
                    onClick={() => { setShowpassword(!showPassword) }}
                />
                <input type={showPassword && showPassword == true ? "text" : "password"} className={inputstyle} onChange={() => { }} required={true}></input>
            </div>
            <input type="submit" value="Sign in" className="mt-[36px] lg:w-[385.88px] md:w-[385.88px] w-[230px] h-[54.25px]  bg-submit text-brightwhite rounded-small">
            </input>
        </form>
    )
};
