import { useAuth } from "@/context/authContext";
import { useEffect } from "react";
import { routes } from "../routes/routes";
import { useRouter } from "next/navigation";

const usePublic= () =>{
    const { isAuth } = useAuth();
    const router = useRouter();

    useEffect(()=>{
        isAuth && router.push(routes.home)
    }, [isAuth])

}

export default usePublic;