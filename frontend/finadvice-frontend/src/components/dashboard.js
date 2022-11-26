import React from "react";
import { useAuth } from "./auth";
export default function Dashboard (){
    const auth = useAuth();

    return(
        <h1>Dashboard {auth.user}</h1>
    )
}