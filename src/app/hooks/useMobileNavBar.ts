import {  DoorOpen, Home, MessageCircle } from "lucide-react";
import { useMemo } from "react";

export const useMobileNavRoutes = () =>{
    const routes = useMemo(()=>[
        {
            route : "/",
            icon : Home
        },
        {
            route : "/messages",
            icon  : MessageCircle
        },
      
        {
            route : "/rooms",
            icon : DoorOpen
        },
        {
            route : '/profile',
            

        }

    ],[])

    return {routes};
}