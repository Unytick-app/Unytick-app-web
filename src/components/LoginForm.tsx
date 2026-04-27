"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ModalLogin from "@/components/ModalLogin";
import { loginAction } from "@/actions/login.action";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authError, setAuthError] = useState("");

  const handleLoginAction = (formData: FormData) => {
    
    setAuthError("");
    setIsLoading(true);
     loginAction(formData).then((result) => {
        if (!result.ok) {
          setAuthError(
            result.error ?? "No fue posible iniciar sesion. Intente nuevamente.",
          );
          setIsLoading(false);
          return;
        }
  
        router.replace("/home");

      }).catch(()=>{
        setAuthError("No fue posible iniciar sesion. Intente nuevamente.");
        setIsLoading(false);
      });
    
  };

  return (
    <>
      <div className="w-1/2 bg-linear-to-b from-white/5 to-white/2 rounded-r-2xl p-10 flex flex-col justify-center">
        {/* Header */}
        {/* <form action={createUserAction}>

        <button
          type="submit"
          className="text-[#7ECDA7] hover:text-[#1f8856] transition mb-4"
        >
          crear cuenta
        </button>
        </form> */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Inicio de Sesión
          </h2>
          <p className="text-white/60 text-sm">
            Ingrese sus credenciales operativas para continuar
          </p>
        </div>

        {/* Form */}
        <form action={handleLoginAction} className="space-y-6">
          {/* Email/Usuario */}
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-3 tracking-wider">
              USUARIO OPERATIVO
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="correo"
              placeholder="usuario"
              className="w-full bg-black/25 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#7ECDA7] focus:bg-white/10 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-3 tracking-wider">
              CLAVE DE ACCESO
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="clave"
              placeholder="••••••••••"
              className="w-full bg-black/25 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#7ECDA7] focus:bg-white/10 transition"
              required
            />
          </div>

          {/* Links */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 aspect-square rounded-full border border-white/10"></div>
              <span className="text-white/60  cursor-pointer">
                Recordar sesión
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className=" text-[#7ECDA7] hover:text-[#1f8856] transition"
            >
              ¿No tienes cuenta?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-[#7FD3AA] to-[#056C4B] hover:from-[#056C4B] hover:to-[#002016] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-400 flex items-center justify-center gap-2 mt-8"
          >
            <span>
              {isLoading ? "Validando acceso..." : "Ingresar al Sistema"}
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          {authError ? (
            <p className="text-sm text-red-300 mt-3">{authError}</p>
          ) : null}
        </form>
      </div>

      <ModalLogin isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
