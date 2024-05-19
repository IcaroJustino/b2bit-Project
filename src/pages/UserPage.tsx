import UserHeader from "../components/header"
import UserCard from "../components/userCard"
import { useEffect, useState } from "react"
import { GetUserdata } from "../api/services"
export default function UserPage() {

    const [User, setUser]: any = useState()


    const FetchData = async () => {
        try {
            const token = sessionStorage.getItem("acess_token")
            const userData = await GetUserdata(token)
            if (userData.msg == "sucess") {
                setUser(userData.response)
            } else {
                alert("Somenthing Whent Wrong")
            }

        } catch (error) {

        }
    }


    useEffect(() => {
        FetchData()
    }, [])



    return (
        <>
            <main className="h-screen w-screen bg-user_page flex flex-col">
                <UserHeader />
                <div className="flex w-full h-full ">
                    {
                        User ?
                            <UserCard data={User} /> :
                            <></>
                    }
                </div>
            </main>
        </>
    )

};
