"use client";

import { useState } from "react";

const mockActivities = [
  {
    id: 1,
    time: "12:45 PM",
    timeAgo: "Hace 2 min",
    type: "Venta de Ficho",
    user: { name: "Juan Perez", id: "200000000", avatar: "JP" },
    amount: "$15.500",
    status: "COMPLETADO",
  },
  {
    id: 2,
    time: "12:42 PM",
    timeAgo: "Hace 5 min",
    type: "Venta de Ficho",
    user: { name: "Maria Gomez", id: "200000001", avatar: "MG" },
    amount: "$15.500",
    status: "COMPLETADO",
  },
  {
    id: 3,
    time: "12:38 PM",
    timeAgo: "Hace 9 min",
    type: "Venta de Ficho",
    user: { name: "Carlos Ruiz", id: "200000005", avatar: "CR" },
    amount: "$15.500",
    status: "PENDIENTE",
  },
  {
    id: 4,
    time: "12:30 PM",
    timeAgo: "Hace 17 min",
    type: "Venta de Ficho",
    user: { name: "Ana Lucia Vega", id: "200000009", avatar: "AL" },
    amount: "$8.200",
    status: "COMPLETADO",
  },
];

export default function ActivityPage() {
  const [filter, setFilter] = useState("Todas");

  return (
    <section className="px-4 pb-8 pt-7 md:px-8 max-w-[1400px] mx-auto">
      {/* Header section */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div>
          <p className="reveal reveal-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#bde9d2] backdrop-blur-xl shadow-sm">
            Sede Monteria - Comedor Central
          </p>

          <h1 className="reveal reveal-4 mt-3 text-4xl font-semibold leading-tight text-[#edf3ff] md:text-5xl tracking-tight">
            Registro de <span className="text-[#9ce9c7] font-medium italic">Actividad</span>
          </h1>
          <p className="reveal reveal-5 mt-2 max-w-2xl text-base text-white/50 leading-relaxed">
            Supervisa el flujo de operaciones en tiempo real y gestiona el historial operativo de la sede.
          </p>
        </div>

        <div className="reveal reveal-5 flex flex-wrap items-center gap-3">
          {/* Calendar Picker */}
          <button className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl py-2.5 px-5 text-sm text-white/80 transition-all hover:border-white/20 hover:from-white/15 hover:to-white/10 shadow-lg cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" className="size-4 text-white/50" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div className="text-left flex flex-col">
              <span className="font-medium text-[#edf3ff] text-[13px]">12 Oct, 2023 -</span>
              <span className="text-[11px] text-white/40">Hoy</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="size-4 ml-2 text-white/40" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Action Buttons */}
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl text-white/80 transition-all hover:border-white/20 hover:from-white/15 hover:to-white/10 shrink-0 shadow-lg cursor-pointer group">
             <svg viewBox="0 0 24 24" fill="none" className="size-5 group-hover:scale-110 transition-transform" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
             </svg>
          </button>

          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl text-white/80 transition-all hover:border-white/20 hover:from-white/15 hover:to-white/10 shrink-0 shadow-lg cursor-pointer group">
            <svg viewBox="0 0 24 24" fill="none" className="size-5 group-hover:-translate-y-0.5 transition-transform" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>

      {/* KPIs Cards */}
      <div className="reveal reveal-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
         {/* Card 1 */}
         <div className="group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] px-7 py-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-3xl relative overflow-hidden flex flex-col justify-between h-[160px] hover:border-white/20 hover:shadow-[0_8px_30px_rgba(156,233,199,0.1)] transition-all duration-500 hover:-translate-y-1">
           <div className="absolute -right-8 -top-8 size-32 bg-[#9ce9c7] opacity-[0.03] blur-2xl rounded-full group-hover:opacity-[0.06] transition-opacity duration-500"></div>
           <div className="flex items-center justify-between relative z-10">
              <div className="flex size-11 items-center justify-center rounded-[1rem] bg-[#9ce9c7]/10 text-[#9ce9c7] ring-1 ring-[#9ce9c7]/20 shadow-[inset_0_1px_rgba(255,255,255,0.2)]">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2.5">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <circle cx="12" cy="12" r="2" />
                      <line x1="6" y1="12" x2="6.01" y2="12" />
                  </svg>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#9ce9c7]/10 to-[#9ce9c7]/5 border border-[#9ce9c7]/20 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#9ce9c7] shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="size-3" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                  +12%
              </div>
           </div>
           <div className="relative z-10">
               <p className="text-[13px] font-medium text-white/50 mb-0.5">Ventas Totales Hoy</p>
               <h3 className="text-[32px] font-semibold text-[#edf3ff] tracking-tight">$2.450.000</h3>
           </div>
         </div>

         {/* Card 2 */}
         <div className="group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] px-7 py-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-3xl relative overflow-hidden flex flex-col justify-between h-[160px] hover:border-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-1">
           <div className="absolute -right-8 -top-8 size-32 bg-[#edf3ff] opacity-[0.02] blur-2xl rounded-full group-hover:opacity-[0.04] transition-opacity duration-500"></div>
           <div className="flex items-center justify-between relative z-10">
              <div className="flex size-11 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-[#edf3ff] shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
              </div>
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 shadow-sm px-2.5 py-1 text-[11px] font-medium text-white/60">
                  Estable
              </div>
           </div>
           <div className="relative z-10">
               <p className="text-[13px] font-medium text-white/50 mb-0.5">Tickets Validados</p>
               <div className="flex items-baseline gap-2">
                 <h3 className="text-[32px] font-semibold text-[#edf3ff] tracking-tight">342</h3>
                 <span className="text-[13px] font-medium text-white/30 italic">de 500 disp.</span>
               </div>
           </div>
         </div>

         {/* Card 3 */}
         <div className="group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] px-7 py-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-3xl relative overflow-hidden flex flex-col justify-between h-[160px] hover:border-white/20 hover:shadow-[0_8px_30px_rgba(252,165,165,0.05)] transition-all duration-500 hover:-translate-y-1">
           <div className="absolute -right-8 -top-8 size-32 bg-red-400 opacity-[0.03] blur-2xl rounded-full group-hover:opacity-[0.06] transition-opacity duration-500"></div>
           <div className="flex items-center justify-between relative z-10">
              <div className="flex size-11 items-center justify-center rounded-[1rem] bg-red-400/10 text-red-300 ring-1 ring-red-400/20 shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2">
                     <circle cx="12" cy="12" r="9" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                  </svg>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-red-400/10 to-red-400/5 border border-red-400/20 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-red-300 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="size-3" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  -4s
              </div>
           </div>
           <div className="relative z-10">
               <p className="text-[13px] font-medium text-white/50 mb-0.5">Promedio Atención</p>
               <div className="flex items-baseline gap-2">
                 <h3 className="text-[32px] font-semibold text-[#edf3ff] tracking-tight">0:42</h3>
                 <span className="text-[13px] font-medium text-white/30 italic">seg/ticket</span>
               </div>
           </div>
         </div>
      </div>

      {/* Main Data Table */}
      <div className="reveal reveal-7 mt-8 rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-3xl overflow-hidden flex flex-col">
         {/* Table Header Controls */}
         <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 px-6 py-5 gap-4 relative z-10 bg-white/[0.01]">
           <div className="flex gap-1.5 p-1.5 rounded-[1.1rem] border border-white/10 bg-[#080d1a]/50 w-fit backdrop-blur-xl shadow-inner">
             {["Todas", "Completadas", "Pendientes"].map(f => (
               <button
                 key={f}
                 onClick={() => setFilter(f)}
                 className={`px-5 py-1.5 rounded-[0.85rem] text-[13px] font-medium transition-all duration-300 ${
                   filter === f 
                    ? "bg-white/10 text-white shadow-md ring-1 ring-white/10" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                 }`}
               >
                 {f}
               </button>
             ))}
           </div>
           <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-[#9ce9c7] animate-pulse"></div>
             <p className="text-[13px] text-white/40 italic">Mostrando las últimas 50 actividades</p>
           </div>
         </div>

         {/* Desktop Table Headers */}
         <div className="hidden lg:grid grid-cols-[1.5fr_1.5fr_2.5fr_1.5fr_1fr_0.5fr] gap-4 px-8 py-4 bg-white/[0.02] border-b border-white/5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
            <div>Hora</div>
            <div>Actividad</div>
            <div>Estudiante</div>
            <div>Monto</div>
            <div>Estado</div>
            <div className="text-right">Ajustes</div>
         </div>

         {/* Table Content */}
         <div className="divide-y divide-white/[0.03] group/list">
           {mockActivities
             .filter(a => filter === "Todas" || (filter === "Completadas" && a.status === "COMPLETADO") || (filter === "Pendientes" && a.status === "PENDIENTE"))
             .map(activity => (
             <div key={activity.id} className="relative grid lg:grid-cols-[1.5fr_1.5fr_2.5fr_1.5fr_1fr_0.5fr] gap-4 px-6 lg:px-8 py-4 items-center transition-all duration-300 hover:bg-white/[0.04] group/row">
                
                {/* Hover indicator side line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] rounded-r-full bg-[#9ce9c7] opacity-0 transition-all duration-300 group-hover/row:opacity-100 group-hover/row:h-full" />

                {/* Hora */}
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-sm text-[#edf3ff]">{activity.time}</span>
                  <span className="text-[11px] font-medium text-white/40">{activity.timeAgo}</span>
                </div>

                {/* Tipo de Actividad */}
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 text-[#9ce9c7] shadow-inner shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2.2">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-[13px] text-white/90">{activity.type}</span>
                </div>

                {/* Usuario */}
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-white font-medium text-[11px] shadow-sm shrink-0">
                    {activity.user.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-[13px] text-white/90">{activity.user.name}</span>
                    <span className="text-[11px] font-medium text-white/40">ID: {activity.user.id}</span>
                  </div>
                </div>

                {/* Monto */}
                <div className="font-semibold text-[13px] text-[#9ce9c7]">
                  {activity.amount}
                </div>

                {/* Estado */}
                <div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] uppercase border ${
                    activity.status === "COMPLETADO" 
                      ? "border-[#9ce9c7]/30 bg-[#9ce9c7]/10 text-[#9ce9c7] shadow-[0_0_10px_rgba(156,233,199,0.1)]"
                      : "border-white/10 bg-white/5 text-white/60 shadow-[0_0_10px_rgba(255,255,255,0.02)]"
                  }`}>
                    {activity.status}
                  </span>
                </div>

                {/* Acción */}
                <div className="text-right hidden lg:flex justify-end">
                  <button className="inline-flex p-2 text-white/30 hover:text-white transition-all rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10">
                    <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
             </div>
           ))}
         </div>

         {/* Pagination Footer */}
         <div className="border-t border-white/5 px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.01]">
            <span className="text-[12px] font-medium text-white/40">Mostrando 1-4 de 1,248 resultados</span>
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-white/50">
              <button className="flex size-8 items-center justify-center rounded-[0.6rem] hover:bg-white/10 hover:text-white transition border border-transparent hover:border-white/10">&lt;</button>
              <button className="flex size-8 items-center justify-center rounded-[0.6rem] bg-white/10 text-white shadow-sm border border-white/10 transition">1</button>
              <button className="flex size-8 items-center justify-center rounded-[0.6rem] hover:bg-white/10 hover:text-white transition border border-transparent hover:border-white/10">2</button>
              <button className="flex size-8 items-center justify-center rounded-[0.6rem] hover:bg-white/10 hover:text-white transition border border-transparent hover:border-white/10">3</button>
              <span className="px-1 text-white/30">...</span>
              <button className="flex size-8 items-center justify-center rounded-[0.6rem] hover:bg-white/10 hover:text-white transition border border-transparent hover:border-white/10">125</button>
              <button className="flex size-8 items-center justify-center rounded-[0.6rem] hover:bg-white/10 hover:text-white transition border border-transparent hover:border-white/10">&gt;</button>
            </div>
         </div>
      </div>
    </section>
  );
}
