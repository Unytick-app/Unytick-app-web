"use client";
import { useSession } from "next-auth/react";

const actividadReciente = [
  {
    titulo: "Ticket validado #TR-9801",
    detalle: "Carlos Andres Mendoza - Estudiante ID: 2931",
    hora: "12:42",
    tipo: "validado",
  },
  {
    titulo: "Registro manual de pago",
    detalle: "Valentina Lopez - Invitado ID: 0021",
    hora: "12:38",
    tipo: "manual",
  },
  {
    titulo: "Ticket validado #TR-9799",
    detalle: "Sofia Martinez - Estudiante ID: 4410",
    hora: "12:35",
    tipo: "validado",
  },
  {
    titulo: "Ticket validado #TR-9798",
    detalle: "Mateo Ruiz - Estudiante ID: 1192",
    hora: "12:30",
    tipo: "validado",
  },
];

function IconoCaja() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <section className="px-4 pb-8 pt-7 md:px-8">
      <p className="reveal reveal-3 inline-flex items-center rounded-full border border-white/15 bg-white/4 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#bde9d2] backdrop-blur-xl">
        Sede Monteria - Comedor Central
      </p>

      <h1 className="reveal reveal-4 mt-3 text-4xl font-semibold leading-tight text-[#edf3ff] md:text-5xl">
        Bienvenido,{" "}
        <span className="text-[#9ce9c7]">
          {session?.user?.name || "Usuario"}
        </span>
      </h1>
      <p className="reveal reveal-5 mt-2 max-w-2xl text-base text-white/67">
        La cocina esta en marcha y los tickets listos para ser atendidos.
      </p>

      <article className="reveal reveal-5 mt-5 rounded-2xl border border-[#9be7c9]/22 bg-white/4 px-4 py-3 backdrop-blur-xl sm:max-w-xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#bde9d2]">
          Identificacion operativa
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-white/12 bg-black/18 px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide text-white/48">
              ID del operador
            </p>
            <p className="mt-1 font-mono text-sm text-[#e9fff3]">
              {session?.user?.id ?? "No disponible"}
            </p>
          </div>
          <div className="rounded-xl border border-white/12 bg-black/18 px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide text-white/48">
              ID del usuario
            </p>
            <p className="mt-1 font-mono text-sm text-[#e9fff3]">
              {session?.user?.cedula ?? "No disponible"}
            </p>
          </div>
        </div>
      </article>

      <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <article className="reveal reveal-6 group rounded-3xl border border-white/12 bg-white/4.5 p-6 backdrop-blur-2xl transition duration-300 hover:bg-white/6 xl:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-medium">
                Estado de tickets en tiempo real
              </h3>
              <p className="mt-1 text-sm text-white/62">
                Servicio de almuerzo en progreso
              </p>
            </div>
            <div className="text-right">
              <p className="text-5xl font-semibold text-[#a5efcf]">142</p>
              <p className="text-sm text-white/55">de 500 disponibles</p>
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full border border-white/8 bg-black/20">
            <div className="h-full w-[62%] rounded-full bg-linear-to-r from-[#53bf8f] via-[#89e6c1] to-[#c4ffe5]" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/18 p-4 backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-wide text-white/48">
                Tickets vendidos hoy
              </p>
              <p className="mt-1 text-4xl font-medium">358</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/18 p-4 backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-wide text-white/48">
                Validados
              </p>
              <p className="mt-1 text-4xl font-medium">294</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/18 p-4 backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-wide text-white/48">
                Pendientes por validar
              </p>
              <p className="mt-1 text-4xl font-medium text-[#9ce9c7]">64</p>
            </div>
          </div>
        </article>

        <article className="reveal reveal-7 relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-2xl transition duration-300 hover:bg-white/6.5">
          <div className="ambient-float pointer-events-none absolute -right-10 -top-16 size-36 rounded-full bg-[#a5efcf]/25 blur-3xl" />
          <div className="relative">
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.07]">
              <IconoCaja />
            </div>
            <h3 className="text-3xl font-medium leading-tight">
              Registro manual de venta
            </h3>
            <p className="mt-3 text-sm text-white/68">
              Ingreso rapido para pagos en efectivo de estudiantes sin
              ticket digital precomprado.
            </p>
            <button className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-sm font-medium text-[#e8fff4] transition hover:bg-white/[0.14]">
              Abrir registro
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="reveal reveal-8 rounded-3xl border border-white/12 bg-white/4.5 p-5 backdrop-blur-2xl lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-medium">Actividad reciente</h3>
            <button className="rounded-full border border-white/16 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#c3f6df] transition hover:bg-white/8">
              Ver todos
            </button>
          </div>

          <div className="space-y-3">
            {actividadReciente.map((registro) => (
              <div
                key={`${registro.titulo}-${registro.hora}`}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`inline-flex size-8 items-center justify-center rounded-full border border-white/15 ${
                      registro.tipo === "manual"
                        ? "bg-[#183f3f]/85 text-[#b5f2d8]"
                        : "bg-[#1b315c]/85 text-[#cde0ff]"
                    }`}
                  >
                    {registro.tipo === "manual" ? "$" : "✓"}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#eef3ff]">
                      {registro.titulo}
                    </p>
                    <p className="text-xs text-white/55">
                      {registro.detalle}
                    </p>
                  </div>
                </div>

                <span className="text-xs text-white/55">
                  {registro.hora}
                </span>
              </div>
            ))}
          </div>
        </article>

        <div className="reveal reveal-9 space-y-4">
          <article className="rounded-3xl border border-white/12 bg-white/4.5 p-5 backdrop-blur-2xl">
            <h3 className="text-xl font-medium">Ventana de servicio</h3>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Hora pico</span>
                <span className="font-medium">12:30 - 01:15 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Velocidad promedio</span>
                <span className="font-medium">12.4s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Estado inventario</span>
                <span className="rounded-full border border-[#8ce7c5]/35 bg-[#173a30]/80 px-2.5 py-1 text-xs font-medium text-[#b3f3d8]">
                  Estable
                </span>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/4.5 p-5 backdrop-blur-2xl">
            <div className="absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-[#9de9cb]/14 to-transparent" />
            <div className="relative">
              <h4 className="text-lg font-medium">Mantener estandares</h4>
              <p className="mt-2 text-sm text-white/60">
                Higiene y calidad para una operacion confiable.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
