'use client'
import { routes } from "@/app/routes/routes";
import Button from "@/components/Button";
import Login from "@/views/login";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
    return (
    <div>
        <div className="flex gap-4">
    <Link href={routes.register}>
          <Button variant="secondary">
          Registrarse
          </Button>
          
    </Link>
    </div>
    <Login />
    
    </div>
    )
}

export default LoginPage;