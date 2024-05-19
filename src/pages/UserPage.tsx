import UserHeader from "../components/header"
import UserCard from "../components/userCard"
import { useEffect, useState } from "react"
import { GetUserdata } from "../api/services"
import { UserType } from "../types/types"
export default function UserPage() {

    const [User, setUser]: any = useState()

    const usermockup = {
        "id": "445e138e-99c6-4055-91d1-ebc2fb6165ee",
        "avatar": {
            "id": 8,
            "image_high_url": "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_0spsnuL.jpg",
            "image_medium_url": "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_medium_VjJtnel.jpg",
            "image_low_url": "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_low_5Vh2hYj.jpg"
        },
        "name": "Miguel",
        "last_name": "Rocha",
        "email": "miguel@b2bit.company",
        "role": {
            "value": 0,
            "label": "Staff"
        },
        "last_login": "2022-03-08T14:28:39.781811Z",
        "staff_role": {
            "value": 0,
            "label": "Admin"
        }
    }

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
