import { useNavigate } from "react-router-dom";

export default function UserHeader() {
    const navigate = useNavigate();

    const Logout = async () => {

        try {
            const url: string = `api url`;
            navigate("/");
        } catch (err: any) {
            console.log(err.message)
        }
        console.log("Saiu");
    }

    return (
        <nav className="flex flex-row justify-end bg-white w-screen h-[70px]">
            <button type="button" onClick={Logout} id="logout" name="logout" className="w-[102px] md:w-[102px] lg:w-[272px] h-[44px] text-center content-center my-[13px] mr-[34px] bg-submit rounded-xsm text-white font-bold">Logout</button>
        </nav>
    )
};