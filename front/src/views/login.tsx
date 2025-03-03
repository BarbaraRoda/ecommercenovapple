"use client";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";
import { login } from "@/services/auth";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";
import { routes } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import usePublic from "@/app/hooks/usePublic";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: Yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
});


interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  usePublic()
  const {saveUserData} = useAuth();
  const router = useRouter();
   const handleOnSubmit = async (values: FormData) => {
      try {
          const res = await login(values);
  
          toast.success("Iniciaste sesión correctamente!")
          saveUserData(res)
          setTimeout(()=>router.push(routes.home), 
          1500)

      } catch (e: any) {
          console.warn("Error al loguearse", e?.message)
          toast.error("Verifica usuario y contraseña");
      }
      console.log("Login exitoso", values);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleOnSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="border p-2 rounded"
            />
            {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="**********"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="border p-2 rounded"
            />
            {errors.password && touched.password && <p className="text-red-500">{errors.password}</p>}

            <Button type="submit" disabled={isSubmitting}>
              Iniciar Sesión
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
