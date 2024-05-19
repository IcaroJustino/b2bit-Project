import Logo from '../assets/logo.png'
import LoginForm from "../components/loginform"


export default function LoginPage() {

    return (
        <>
            <main className="bg-login  h-screen w-screen flex">
                <div className="lg:w-[27rem] md:w-[33rem] w-[80%] min-h-[37rem] h-fit  py-6 m-auto flex flex-col justify-start shadow-simple rounded-default z-[99] ">
                    <div className="m-auto w-fit mt-[55px] mb-[34px] lg:p-0 md:p-0 px-10">
                        <img className="profile-photo" src={Logo} alt={"b2bitlogo"} aria-readonly={true} />
                    </div>
                    <LoginForm />
                </div>
            </main>
        </>
    )
};
