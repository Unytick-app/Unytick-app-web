"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function IconoPanel() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path
        d="M3 3h8v8H3V3Zm10 0h8v5h-8V3ZM3 13h5v8H3v-8Zm7 4h11v4H10v-4Zm0-4h11v2H10v-2Z"
        className="fill-current"
      />
    </svg>
  );
}

function IconoLista() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path
        d="M5 6h14M5 12h14M5 18h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="3" cy="6" r="1" className="fill-current" />
      <circle cx="3" cy="12" r="1" className="fill-current" />
      <circle cx="3" cy="18" r="1" className="fill-current" />
    </svg>
  );
}

function IconoTicket() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path
        d="M4 9a2 2 0 0 0 0 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 1 1 0-4V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 8v8M15 8v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconoReloj() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 8v4l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconoCaja() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#060b19] text-[#e9efff]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(140,183,255,0.18),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(144,255,216,0.12),transparent_32%),radial-gradient(circle_at_70%_80%,rgba(140,183,255,0.12),transparent_36%),linear-gradient(180deg,#040811_0%,#060b19_48%,#050912_100%)]" />
      <div className="grid-drift pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[46px_46px] opacity-35" />

      <aside className="reveal reveal-1 fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-white/10 bg-white/3 p-5 backdrop-blur-2xl lg:flex lg:flex-col">
        <div className="mb-7">
          <h1 className="text-2xl font-semibold tracking-tight text-[#b7f7d8]">
            Unytick-web
          </h1>
          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/45">
            Panel Operativo
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
          <p className="text-sm font-medium text-[#ecf4ff]">
            {session?.user?.comedor || "Comedor No asignado"}
          </p>
          <p className="mt-1 text-xs text-white/55">Sesion activa</p>
        </div>

        <button className="mt-4 rounded-xl border border-[#7dd2ae]/45 bg-linear-to-r from-[#89e6c1]/95 to-[#53b989]/95 px-4 py-3 text-sm font-semibold text-[#07311f] transition hover:brightness-105">
          Nueva venta
        </button>

        <nav className="mt-8 space-y-1 text-sm text-white/70">
          <Link
            href="/home"
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition ${
              pathname === "/home"
                ? "border border-white/14 bg-white/6 text-[#c8ffe5]"
                : "hover:bg-white/5"
            }`}
          >
            <IconoPanel />
            <span>Inicio</span>
          </Link>
          <Link
            href="/home/buyTicket"
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
              pathname === "/home/buyTicket"
                ? "border border-white/14 bg-white/6 text-[#c8ffe5]"
                : "hover:bg-white/5"
            }`}
          >
            <IconoLista />
            <span>Venta rapida</span>
          </Link>

          <Link
            href="/home/tickets"
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
              pathname === "/home/tickets"
                ? "border border-white/14 bg-white/6 text-[#c8ffe5]"
                : "hover:bg-white/5"
            }`}
          >
            <IconoTicket />
            <span>Tickets</span>
          </Link>

          <Link
            href="/home/activity"
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
              pathname === "/home/activity"
                ? "border border-white/14 bg-white/6 text-[#c8ffe5]"
                : "hover:bg-white/5"
            }`}
          >
            <IconoReloj />
            <span>Actividad</span>
          </Link>
          <Link
            href="/home/inventory"
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
              pathname === "/home/inventory"
                ? "border border-white/14 bg-white/6 text-[#c8ffe5]"
                : "hover:bg-white/5"
            }`}
          >
            <IconoCaja />
            <span>Inventario</span>
          </Link>
        </nav>

        <div className="mt-auto space-y-2 text-sm text-white/68">
          <button className="w-full rounded-lg px-3 py-2 text-left transition hover:bg-white/5">
            Soporte
          </button>

          <button
            onClick={() => {
              signOut();
              router.replace("/");
            }}
            className="w-full text-left rounded-lg px-3 py-2 text-[#ffc4c4] transition hover:bg-white/5"
          >
            Cerrar sesion
          </button>
        </div>
      </aside>

      <main className="relative z-10 min-h-screen lg:pl-64">
        <header className="reveal reveal-2 sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-4 backdrop-blur-2xl md:px-8">
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1.5 md:flex">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Panel Operativo
              </p>
              <h2 className="text-lg font-medium text-[#e5edff]">
                Centro de control
              </h2>
            </div>
          </div>

          <div className="hidden w-full max-w-md items-center gap-3 rounded-xl border border-white/12 bg-white/4 px-3 py-2 text-sm text-white/50 md:flex">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-4"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m20 20-3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
            <span>Buscar estudiantes o tickets...</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                signOut();
                router.replace("/");
              }}
              className="hidden rounded-full border cursor-pointer sm:inline-block bg-red-500/10 border-red-500/65 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500/25 hover:border-red-500/85"
            >
              cerrar Sesion activa
            </button>

            <div className="size-9 rounded-full border border-white/20 bg-linear-to-br from-[#6ea5dc]/55 to-[#7de0af]/40 backdrop-blur" />
          </div>
        </header>

        {children}
      </main>

      <style jsx global>{`
        @keyframes softRevealUp {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes ambientFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes driftGrid {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(16px, 16px, 0);
          }
        }

        .reveal {
          opacity: 0;
          animation: softRevealUp 760ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: transform, opacity, filter;
        }

        .reveal-1 {
          animation-delay: 40ms;
        }

        .reveal-2 {
          animation-delay: 100ms;
        }

        .reveal-3 {
          animation-delay: 160ms;
        }

        .reveal-4 {
          animation-delay: 220ms;
        }

        .reveal-5 {
          animation-delay: 280ms;
        }

        .reveal-6 {
          animation-delay: 340ms;
        }

        .reveal-7 {
          animation-delay: 400ms;
        }

        .reveal-8 {
          animation-delay: 460ms;
        }

        .reveal-9 {
          animation-delay: 520ms;
        }

        .ambient-float {
          animation: ambientFloat 7.2s ease-in-out infinite;
        }

        .grid-drift {
          animation: driftGrid 20s linear infinite alternate;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .ambient-float,
          .grid-drift {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
}
