"use client"; 
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";
import { register } from "@/services/auth";
import { Slide, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes/routes";
import usePublic from "@/app/hooks/usePublic";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: Yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
  address: Yup.string().required("La dirección es obligatoria"),
  phone: Yup.string().required("El teléfono es obligatorio"),
});

interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

const Register = () => {
  usePublic();
  const router = useRouter();
  
  const handleOnSubmit = async (values: FormData) => {
    try {
      await register(values);
      toast.success("Te registraste con éxito!");

      setTimeout(() => {
        router.push(routes.login);
      }, 3050);
    } catch (e: any) {
      console.warn("Error al registrar usuario", e?.message);
      toast.error("No se pudo realizar el registro");
    }
    console.log("Registro exitoso", values);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Registrarse para comprar</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "", address: "", phone: "" }}
          validationSchema={registerSchema}
          onSubmit={handleOnSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="border p-2 rounded"
              />
              {errors.name && touched.name && <p className="text-red-500">{errors.name}</p>}

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

              <input
                type="text"
                name="address"
                placeholder="Dirección"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                className="border p-2 rounded"
              />
              {errors.address && touched.address && <p className="text-red-500">{errors.address}</p>}

              <input
                type="text"
                name="phone"
                placeholder="Teléfono"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className="border p-2 rounded"
              />
              {errors.phone && touched.phone && <p className="text-red-500">{errors.phone}</p>}

              <Button type="submit" disabled={isSubmitting}>
                Registrarse
              </Button>
            </form>
          )}
        </Formik>
      </div>

      <div className="w-1/2 bg-colorPrimario text-colorSecundario flex items-center justify-center p-8">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4">Regístrate ahora</h3>
          <p className="text-lg">Accede a nuestros mejores precios y comienza a disfrutar de productos exclusivos.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
