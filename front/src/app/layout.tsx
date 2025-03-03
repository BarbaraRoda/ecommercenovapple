import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css"
import Navbar from "../components/navBar/navBar";
import Footer from "@/views/footer";
import VisibleWrapper from "@/components/visibleWrapper";
import { Slide, ToastContainer} from 'react-toastify';
import { AuthProvider } from "@/context/authContext";
import { CartProvider } from "@/context/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce Barbara Roda",
  description: "Un ecommerce creado por Barbara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <CartProvider>
        <VisibleWrapper>
        <Navbar/>
        </VisibleWrapper>
        
        {children}
        
        <Footer/>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Slide}
/>
</CartProvider>
</AuthProvider>
      </body>
      
    </html>
  );
}
