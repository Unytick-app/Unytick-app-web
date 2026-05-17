"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { QRCodeSVG } from "qrcode.react";

interface ModalVentaConfirmadaProps {
  isOpen: boolean;
  onClose: () => void;
  estudiante: string;
  monto: string;
  fecha: string;
  idTransaccion: string;
  ticketId: string;
}

export default function ModalVentaConfirmada({
  isOpen,
  onClose,
  estudiante,
  monto,
  fecha,
  idTransaccion,
  ticketId,
}: ModalVentaConfirmadaProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="reveal relative flex w-full max-w-[420px] flex-col items-center rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[rgba(17,21,31,0.8)] to-[#080d1a]/95 px-8 pt-5 pb-8 shadow-[0_20px_60px_rgb(0,0,0,0.5)] backdrop-blur-3xl overflow-hidden max-h-[95vh] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:my-6 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 transition-all duration-500">
        
        {/* Glow de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 bg-[#9ce9c7] opacity-[0.06] blur-3xl rounded-full pointer-events-none"></div>

        {/* Icono Check */}
        <div className="relative mb-2 flex size-14 shrink-0 items-center justify-center rounded-[1rem] border border-white/10 bg-gradient-to-b from-[rgb(34,44,66)] to-[#9ce9c7]/5 text-[#9ce9c7] shadow-[inset_0_1px_rgba(255,255,255,0.1),0_0_20px_rgba(156,233,199,0.2)] ring-1 ring-[#9ce9c7]/20">
          <svg viewBox="0 0 24 24" fill="none" className="size-6 drop-shadow-[0_0_8px_rgba(156,233,199,0.6)]" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Textos */}
        <h2 className="text-[22px] shrink-0 font-semibold tracking-tight text-[#edf3ff]">Venta Confirmada</h2>
        <p className=" shrink-0 text-center text-[13px] text-white/50 leading-relaxed max-w-[280px]">
          La transacción se ha validado y el ticket ya está listo para generarse.
        </p>

        {/* Ticket Box */}
        <div className="relative mt-4 shrink-0 w-[80%] overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-[#222c42] to-white/[0.02] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl">
          {/* Top Section / QR */}
          <div className="flex flex-col items-center p-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50 blur-xl"></div>
            <div className="relative rounded-[1rem] bg-[#0c1427]/30 border border-white/10 p-3 shadow-inner">
              <QRCodeSVG 
                value={ticketId} 
                size={110} 
                level="Q" 
                fgColor="#9ce9c7" 
                bgColor="transparent" 
              />
            </div>
            <p className="mt-2 font-mono text-[11px] font-semibold tracking-[0.25em] text-white/50">
              {ticketId}
            </p>
          </div>

          {/* Separador con recortes */}
          <div className="relative h-px w-full">
            <div className="absolute inset-x-5 top-1/2 border-t-3 border-dashed border-white/10 opacity-70" />
            {/* Left Cutout */}
            <div className="absolute -left-4 top-1/2 size-8 -translate-y-1/2 rounded-full border border-white/10 bg-[#080d1a]/95 shadow-inner" style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }} />
            {/* Right Cutout */}
            <div className="absolute -right-4 top-1/2 size-8 -translate-y-1/2 rounded-full border border-white/10 bg-[#080d1a]/95 shadow-inner" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }} />
          </div>

          {/* Bottom Section / Details */}
          <div className="p-3 md:p-4 bg-white/[0.02]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-1">ESTUDIANTE</p>
                <p className="text-[12px] font-bold text-[#edf3ff] truncate" title={estudiante}>{estudiante}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-1">MONTO</p>
                <p className="text-[14px] font-bold text-[#9ce9c7] truncate drop-shadow-[0_0_8px_rgba(156,233,199,0.3)]">{monto}</p>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-1">FECHA</p>
                <p className="text-[12px] font-medium text-white/80 truncate">{fecha}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-1">TRANSACCIÓN</p>
                <p className="text-[12px] font-mono text-white/80 truncate">{idTransaccion}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="mt-8 shrink-0 w-full flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 rounded-[1.25rem] border border-white/10 bg-[#080d1a]/40 py-3.5 text-[14px] font-semibold text-white/60 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white shadow-inner"
          >
            Cerrar
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-[1.25rem] border border-transparent bg-gradient-to-r from-[#89e6c1] to-[#53bf8f] py-3.5 text-[14px] font-bold text-[#07311f] transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-[0_0_30px_rgba(125,210,174,0.2)] hover:shadow-[0_0_40px_rgba(125,210,174,0.3)] active:scale-[0.98]">
            <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);

  
}


