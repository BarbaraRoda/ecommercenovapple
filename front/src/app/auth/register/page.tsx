'use client'
import { routes } from "@/app/routes/routes";
import Button from "@/components/Button";
import Register from "@/views/register";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
    return (
        <div>
            <div className="flex gap-4">
                <Link href={routes.login}>
          <Button variant="secondary">
          Iniciar Sesión
          </Button>
          </Link>
            </div>
        
        <Register/>
        
        </div>
        )
}

export default SignUpPage;