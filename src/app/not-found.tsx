"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function IconoEncendido() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 text-current" aria-hidden="true">
      <path d="M12 2a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m0 14a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1m8-6a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4m-14 0a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h4m11.657-5.657a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 0 1-1.414-1.414l2.828-2.829a1 1 0 0 1 1.414 0m-11.314 11.314a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.414l2.828-2.829a1 1 0 0 1 1.414 0m11.314-11.314a1 1 0 0 1-1.414 0l-2.828-2.829a1 1 0 0 1 1.414-1.414l2.828 2.829a1 1 0 0 1 0 1.414m-11.314 11.314a1 1 0 0 1-1.414 0l-2.828-2.829a1 1 0 0 1 1.414-1.414l2.828 2.829a1 1 0 0 1 0 1.414" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconoFlecha() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Fondo con glows animados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 size-96 bg-[#9ce9c7] opacity-[0.03] blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#7dd2ae] opacity-[0.02] blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center">
        {/* Icono Principal */}
        <div className="reveal reveal-1 mb-8 flex size-20 shrink-0 items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-[#9ce9c7] shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-3xl">
          <IconoEncendido />
        </div>

        {/* Título Principal */}
        <h1 className="reveal reveal-2 text-5xl md:text-6xl font-bold tracking-tight text-[#edf3ff] mb-3">
          En Desarrollo
        </h1>

        {/* Subtítulo */}
        <p className="reveal reveal-3 text-lg md:text-xl text-white/60 mb-2">
          Próximamente
        </p>

        {/* Descripción */}
        <p className="reveal reveal-4 max-w-xl text-base text-white/50 leading-relaxed mb-10">
          Estamos trabajando en esta sección para mejorar tu experiencia en el Panel Operativo. Estará disponible muy pronto con herramientas optimizadas para tu gestión diaria.
        </p>

        {/* Stats Box */}
        <article className="reveal reveal-5 group w-full max-w-md rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-3xl relative overflow-hidden mb-10 transition-all duration-500 hover:border-white/20">
          <div className="absolute -right-20 -top-20 size-40 bg-[#9ce9c7] opacity-[0.02] blur-3xl rounded-full group-hover:opacity-[0.04] transition-opacity duration-500"></div>

          <div className="grid grid-cols-2 gap-6 relative z-10">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2">
                ESTADO
              </p>
              <p className="text-[16px] font-bold text-[#edf3ff] flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9ce9c7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-[#9ce9c7]"></span>
                </span>
                En Progreso
              </p>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2">
                VERSIÓN
              </p>
              <p className="text-[16px] font-bold text-[#9ce9c7]">v2.4.0-beta</p>
            </div>

            <div className="col-span-2 pt-6 border-t border-white/5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2">
                OPTIMIZACIÓN
              </p>
              <div className="w-full h-1.5 rounded-full bg-black/40 overflow-hidden shadow-inner">
                <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-[#53bf8f] to-[#9ce9c7] shadow-[0_0_10px_rgba(156,233,199,0.5)] transition-all duration-1000" style={{ animation: "pulse 3s ease-in-out infinite" }}></div>
              </div>
              <p className="text-[11px] font-medium text-white/40 mt-2">62% completado</p>
            </div>
          </div>
        </article>

        {/* Acciones */}
        <div className="reveal reveal-6 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 flex-1 rounded-[1.25rem] border border-white/10 bg-[#080d1a]/40 py-3.5 text-[14px] font-semibold text-white/60 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white shadow-inner group"
          >
            <IconoFlecha />
            Volver Atrás
          </button>

          <Link
            href="/home"
            className="flex items-center justify-center gap-2 flex-1 rounded-[1.25rem] border border-transparent bg-gradient-to-r from-[#89e6c1] to-[#53bf8f] py-3.5 text-[14px] font-bold text-[#07311f] transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-[0_0_30px_rgba(125,210,174,0.2)] hover:shadow-[0_0_40px_rgba(125,210,174,0.3)] active:scale-[0.98]"
          >
            Inicio
            <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="reveal reveal-7 mt-12 pt-8 border-t border-white/5 w-full">
          <p className="text-[12px] text-white/40 leading-relaxed">
            Siéntete libre de explorar otras secciones del panel mientras completamos esta funcionalidad. 
            <br />
            <span className="text-white/30">© 2024 Unytick Global Systems</span>
          </p>
        </div>
      </div>
    </section>
  );
}
