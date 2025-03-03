'use client'
import { routes } from "@/app/routes/routes";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface VisibleWrapperProps{
    children: React.ReactNode;
}

const hidePages = [routes.login, routes.register, routes.landing];

const VisibleWrapper: FC<VisibleWrapperProps>=
({children}) => {
    const pathname= usePathname();

    if (hidePages.includes(pathname)){
        return null;
    }
    
    return (
        <div>{children}</div>
    )
}

export default VisibleWrapper;