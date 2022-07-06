import { useRouter } from "next/router";
import React from "react";

export default function Perfil(){
    const route = useRouter()
    const userId = route.query.id_us
    const userKey = route.query.key_us

    if(userKey != null){
        return(
            <>
                <h1>Vamos conseguir, {userId}</h1>
            </>
        )
    }
}
