"use client";

import { useState } from "react";
import Image from "next/image";
import ModalVentaConfirmada from "@/components/ModalVentaConfirmada";

function IconoDocumento() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 text-[#9ce9c7]" aria-hidden="true">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconoCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconoUsuario() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconoCubiertos() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 text-current" aria-hidden="true">
      <path d="M11 4v8a2 2 0 0 1-4 0V4M7 4v8M15 4v16m0-16h2c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-2m-4 6v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ultimasVentas = [
  { id: "1067423XXX", tiempo: "Hace 2 minutos", monto: "$2,500" },
  { id: "1102941XXX", tiempo: "Hace 5 minutos", monto: "$2,500" },
  { id: "1007231XXX", tiempo: "Hace 12 minutos", monto: "$1,200" },
];

export default function BuyTicketPage() {
  const [selectedMonto, setSelectedMonto] = useState("$2,500");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="px-4 pb-8 pt-7 md:px-8 max-w-[1400px] mx-auto">
      <p className="reveal reveal-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#bde9d2] backdrop-blur-xl shadow-sm">
        Sede Monteria - Comedor Central
      </p>

      <h1 className="reveal reveal-4 mt-3 text-4xl font-semibold leading-tight text-[#edf3ff] md:text-5xl tracking-tight">
        Registrar <span className="text-[#9ce9c7] font-medium italic">Nueva Venta</span>
      </h1>
      <p className="reveal reveal-5 mt-2 max-w-2xl text-base text-white/50 leading-relaxed">
        Ingresa el identificador del estudiante para validar el subsidio y completar la transacción de manera inmediata.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column (Main Form) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <article className="reveal reveal-6 group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-3xl relative overflow-hidden transition-all duration-500 hover:border-white/20">
            <div className="absolute -left-20 -top-20 size-48 bg-[#9ce9c7] opacity-[0.02] blur-3xl rounded-full group-hover:opacity-[0.04] transition-opacity duration-500"></div>
            
            <div className="flex items-start justify-between relative z-10">
              <div>
                <h3 className="text-[22px] font-semibold text-[#edf3ff] tracking-tight">Datos de la Transacción</h3>
                <p className="text-[13px] text-white/50 mt-1">Complete los campos obligatorios del estudiante.</p>
              </div>
              <div className="flex size-11 items-center justify-center rounded-[1rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-inner">
                <IconoDocumento />
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-2 block">
                CÉDULA DEL ESTUDIANTE
              </label>
              <div className="relative group/input">
                <input
                  type="text"
                  placeholder="Ej. 1067000000"
                  defaultValue="1067000000"
                  className="w-full rounded-[1.25rem] border border-white/10 bg-[#080d1a]/50 py-4 pl-5 pr-24 text-[15px] font-medium text-white placeholder-white/30 focus:border-[#9ce9c7]/50 focus:bg-white/[0.03] focus:outline-none focus:ring-4 focus:ring-[#9ce9c7]/10 transition-all shadow-inner"
                />
                <div className="absolute inset-y-0 right-4 flex items-center gap-1.5 text-[#9ce9c7]">
                  <span className="text-[10px] font-bold tracking-[0.2em] opacity-90">LISTO</span>
                  <div className="size-4 opacity-100 drop-shadow-[0_0_8px_rgba(156,233,199,0.5)]"><IconoCheck /></div>
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-2 block">
                MONTO DEL TICKET
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["$1,200", "$2,500", "$5,000"].map((monto) => (
                  <button
                    key={monto}
                    onClick={() => setSelectedMonto(monto)}
                    className={`rounded-[1.25rem] border py-3.5 text-[14px] font-semibold transition-all duration-300 ${
                      selectedMonto === monto
                        ? "border-[#9ce9c7]/30 bg-[#9ce9c7]/10 text-[#9ce9c7] shadow-[0_0_20px_rgba(156,233,199,0.1)] ring-1 ring-[#9ce9c7]/20"
                        : "border-white/10 bg-[#080d1a]/40 text-white/60 hover:border-white/20 hover:bg-white/5 hover:text-white shadow-inner"
                    }`}
                  >
                    {monto}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.25rem] border border-white/5 bg-white/[0.02] p-5 md:p-6 backdrop-blur-xl shadow-inner relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                    DETALLES DEL ESTUDIANTE
                  </h4>
                  <p className="text-[11px] font-medium text-[#9ce9c7] mt-0.5 opacity-80 flex items-center gap-1.5">
                    <span className="relative flex size-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9ce9c7] opacity-75"></span><span className="relative inline-flex rounded-full size-1.5 bg-[#9ce9c7]"></span></span>
                    Validado por base de datos
                  </p>
                </div>
                <div className="size-11 overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-sm relative">
                  <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="object-cover w-full h-full" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-[13px]">
                <div className="flex justify-between md:flex-col md:justify-start gap-1">
                  <span className="text-white/40 font-medium">Nombre Completo:</span>
                  <span className="text-[#edf3ff] font-semibold">Camilo Esteban Rodríguez</span>
                </div>
                <div className="flex justify-between md:flex-col md:justify-start gap-1 md:text-right">
                  <span className="text-white/40 font-medium">Facultad:</span>
                  <span className="text-[#edf3ff] font-semibold">Ingeniería de Sistemas</span>
                </div>
                <div className="flex items-center justify-between md:col-span-2 pt-3 border-t border-white/5">
                  <span className="text-white/40 font-medium tracking-wide">SALDO ACTUAL</span>
                  <span className="text-[#9ce9c7] text-[17px] font-bold tracking-tight">$12,450.00</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-8 relative z-10 w-full flex items-center justify-center gap-2 rounded-[1.25rem] border border-transparent bg-gradient-to-r from-[#89e6c1] to-[#53bf8f] py-4 text-[15px] font-bold text-[#07311f] transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-[0_0_30px_rgba(125,210,174,0.2)] hover:shadow-[0_0_40px_rgba(125,210,174,0.3)] active:scale-[0.98]"
            >
              Confirmar Venta
              <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </article>
        </div>

        {/* Right Column (Sidebar/Widgets) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <article className="reveal reveal-7 group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-7 backdrop-blur-3xl relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 hover:-translate-y-1 transition-all duration-500">
            <div className="absolute right-0 top-0 opacity-[0.02] scale-150 -translate-y-4 translate-x-4 pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-500 text-[#9ce9c7]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-32">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
            </div>
            
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-6 flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-white/20" />
              Resumen del Turno
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-white/60">Tickets Vendidos</span>
                <span className="text-[22px] font-semibold text-[#edf3ff] tracking-tight">142</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-white/60">Total Recaudado</span>
                <span className="text-[26px] font-bold text-[#9ce9c7] tracking-tight">$355,000</span>
              </div>
            </div>

            <div className="mt-8 mb-1 relative z-10">
              <div className="h-2 w-full rounded-full bg-black/40 overflow-hidden shadow-inner flex">
                <div className="h-full w-[71%] rounded-full bg-gradient-to-r from-[#53bf8f] to-[#9ce9c7] shadow-[0_0_10px_rgba(156,233,199,0.5)]" />
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-[11px] font-semibold text-[#9ce9c7]">Excelente ritmo</p>
                <p className="text-[11px] font-medium text-white/40">71% meta diaria</p>
              </div>
            </div>
          </article>

          <article className="reveal reveal-8 group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-7 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-5 flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-white/20" />
              Últimas Ventas
            </h3>
            <div className="space-y-3">
              {ultimasVentas.map((venta, i) => (
                <div key={i} className="flex items-center justify-between group/item hover:bg-white/[0.03] p-2 -mx-2 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 text-[#edf3ff] shadow-inner shrink-0 shadow-sm transition-transform group-hover/item:scale-105">
                      <IconoUsuario />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#edf3ff]">{venta.id}</p>
                      <p className="text-[11px] font-medium text-white/40 mt-0.5">{venta.tiempo}</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-[#9ce9c7] bg-[#9ce9c7]/10 px-2 py-1 rounded-[0.5rem] border border-[#9ce9c7]/10 shadow-[inner_0_1px_rgba(255,255,255,0.1)]">{venta.monto}</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 hover:text-white/80 hover:bg-white/5 rounded-xl transition-all border-t border-white/5">
              Ver Actividad Completa
            </button>
          </article>
          
          <article className="reveal reveal-9 group hover:-translate-y-1 rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-7 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 flex flex-col gap-4 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 size-24 bg-orange-400 opacity-[0.03] blur-2xl rounded-full group-hover:opacity-[0.06] transition-opacity duration-500"></div>
              
              <div className="flex size-11 items-center justify-center rounded-[1rem] bg-orange-400/10 text-orange-300 ring-1 ring-orange-400/20 shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                  <IconoCubiertos />
              </div>
              <div className="relative z-10">
                  <h4 className="text-[13px] font-bold text-[#edf3ff]">Estado de la Cocina</h4>
                  <p className="text-[12px] text-white/50 mt-1.5 leading-relaxed font-medium">Menú del día: Bandeja Paisa.</p>
                  <div className="inline-flex items-center gap-1.5 mt-2 bg-orange-400/10 px-2 py-1 rounded-lg border border-orange-400/20">
                      <span className="relative flex size-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span><span className="relative inline-flex rounded-full size-1.5 bg-orange-400"></span></span>
                      <span className="text-orange-300 font-semibold text-[11px]">85 porciones restantes</span>
                  </div>
              </div>
          </article>
        </div>
      </div>

      <ModalVentaConfirmada 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        estudiante="CAMILO ESTEBAN RODRÍGUEZ"
        monto={selectedMonto}
        fecha="24 Oct, 2023 10:42 AM"
        idTransaccion="#UT-2023-X89"
        ticketId="TK-948271"
      />
    </section>
  );
}
