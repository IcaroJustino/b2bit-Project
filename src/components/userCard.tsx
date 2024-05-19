import { UserType } from "src/types/types"

export default function UserCard(userData: UserType) {
    return (
        <section className="lg:w-[356px] md:w-[356px] w-[80%] min-h-[315px]  bg-card rounded-2xl m-auto flex shadow-light">
            <div className="flex justify-start  mx-auto  my-8 ">
                {
                    userData && userData ?
                        <div className="  lg:min-w-[75px] mx-auto  lg:h-fit lg:w-fit md:w-[fit] w-full flex flex-col justify-start ">
                            <span className="font-semibold text-center text-xsm mb-2.5">Bem vindo de volta {userData.data.name}</span>
                            <img className="object-fit w-[75px] h-[75px]   mx-auto mb-[30px] rounded-lg" src={userData.data.avatar.high} alt={"b2bitlogo"} aria-readonly={true} />
                            <div className="flex flex-col justify-start w-fit h-full ">
                                <label className="flex flex-col">
                                    <span className="flex mb-2"><span className="font-normal">Your</span> <p className="ml-2 font-bold">Name :</p></span>
                                    <input readOnly={true} type="text" value={userData.data.name} className="lg:w-[296px] md:w-[280px] w-full h-[44px] p-2 mb-[20px] bg-white_2"></input>
                                </label>
                                <label className="flex flex-col">
                                    <span className="flex mb-2"><span className="font-normal">Your</span> <p className="ml-2 font-bold">E-mail :</p></span>
                                    <input readOnly={true} type="text" value={userData.data.email} className="bg-white_2 lg:w-[296px] md:w-[280px] w-full h-[44px] p-2 "></input>
                                </label>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        </section>
    )
};
