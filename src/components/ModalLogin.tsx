"use client";

import { createPortal } from "react-dom";

type ModalLoginProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="account-request-title"
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-[3px] transition-all duration-300 ease-out ${
          isOpen ? "opacity-100" : "opacity-0 backdrop-blur-0"
        }`}
      />

      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/25 bg-linear-to-b from-white/[0.14] via-white/9 to-white/6 p-7 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-3 scale-[0.97] opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute -inset-px rounded-2xl border border-white/20" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#7ECDA7]/20 blur-3xl" />

        <div className="relative">
          <div className="mb-5 flex items-start justify-between gap-3">
            <h3
              id="account-request-title"
              className="text-2xl font-semibold bg-gradient-to-r from-[#7ECDA7] to-[#036A49] bg-clip-text text-transparent"
            >
              Solicitud de Cuenta Operativa
            </h3>
            

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/15 hover:text-white"
            >
              Cerrar
            </button>
          </div>
            <div className="flex items-center justify-center p-1 rounded-full bg-white/20  mb-4 w-20 aspect-square mx-auto">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-15"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            </div>
          <div className="text-sm text-white/80 flex flex-col gap-4">
            

            <span className="text-xl font-semibold mx-auto">
              Para solicitar una cuenta...
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/85 mt-4">
            debe acercarse a las oficinas de la administracion de la
            universidad. El personal validara su identidad y, si realmente
            corresponde a un operario autorizado, realizara la creacion de su
            cuenta.
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
