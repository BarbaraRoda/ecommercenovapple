'use client';
import { IUser } from '@/types';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { login } from '@/services/auth';

interface AuthContextType {
    user: IUser | null;
    isAuth: boolean | null;
    token?: string | null;
    saveUserData: (data: { user: IUser; token: string }) => void;
    resetUserData: () => void;
}

interface Test {
    user: IUser;
    token: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuth, setIsAuth] = useState<AuthContextType["isAuth"]>(null);

    const saveUserData = (data: { user: IUser; token: string }) => {
        const userData = {
            user: data.user,
            token: data.token
        };

        console.log("Guardando usuario en localStorage:", userData);

        if (!data.user || !data.token) {
            console.error("Error: No se recibió un 'user' o 'token' válido");
            return;
        }

        setUser(data.user);
        setIsAuth(true);
        setToken(data.token);

  
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const resetUserData = () => {
        setUser(null);
        setIsAuth(false);
        setToken(null);
        localStorage.removeItem('user');
    };

    const onLogin = async (email: string, password: string) => {
        try {
            const response = await login({ email, password });

            if (response.login && response.user && response.token) {
                console.log("Login exitoso", response);

                saveUserData({ user: response.user, token: response.token });
            } else {
                console.error("Error: No se recibieron los datos correctos del backend.");
            }
        } catch (error) {
            console.error("Error al realizar login:", error);
        }
    };

    useEffect(() => {
        const storage = localStorage.getItem("user");

        if (!storage) {
            console.error("No se encontraron datos en localStorage.");
            setIsAuth(false);
            return;
        }

        try {
            const newStorage: Test = JSON.parse(storage);
            console.log("Recuperado de localStorage:", newStorage);

            if (newStorage && newStorage.user && newStorage.token) {
                setUser(newStorage.user);
                setIsAuth(true);
                setToken(newStorage.token);
            } else {
                console.error("El formato de los datos en localStorage es incorrecto.");
                setIsAuth(false);
            }
        } catch (error) {
            console.error("Error al parsear localStorage:", error);
            setIsAuth(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            isAuth,
            saveUserData,
            resetUserData,
            token
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};
