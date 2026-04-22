import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo */}
      <Image
        src="/imagenUniversidad.jpg"
        alt="Universidad de Córdoba"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(11,19,38,0.95)] backdrop-blur-[2px]" />

      <section className="flex justify-between px-6 py-4 z-20 backdrop-blur-[1px] bg-gradient-to-b from-black/20 via-black/5 via-90% to-transparent">
        {/* Header */}
        <div className=" flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-[#7ECDA7]"
          >
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#7ECDA7] to-[#036A49] bg-clip-text text-transparent">
            Unytick
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <span className="border-r border-white/10 pr-8 text-white/80 text-sm">
            Universidad de Córdoba
          </span>
          <Link
            href="#"
            className="text-white/80 hover:text-white transition text-sm"
          >
            Soporte Técnico
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
        <section className="rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl flex w-full max-w-5xl mx-auto overflow-hidden">
          {/* Left Side - Branding */}
          <div className="w-1/2 bg-gradient-to-b from-white/10 to-white/5 rounded-l-2xl p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4  px-2 py-1 rounded-2xl w-45  justify-center bg-[rgba(5,108,75,0.2)]">
                <p className="text-xs font-semibold text-[#7ECDA7] tracking-widest  ">
                  OPERADOR GATEWAY
                </p>
              </div>

              <h2 className="text-4xl font-bold leading-tight">
                <span className="text-[#D9E1FC]">Gestión Institucional</span>
                <br />
                <span className="bg-gradient-to-r from-[#7ECDA7] to-[#036A49] bg-clip-text text-transparent">Eficaz y Segura.</span>
              </h2>
              <p className="text-white/60 text-sm mt-6 leading-relaxed">
                Acceda al panel operarios de Unytick para la Universidad de
                Córdoba. Realice compras y gestione de forma eficiente.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 ">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center p-1 rounded-full bg-[#7ECDA7]/20 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-[#7ECDA7]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#D9E1FC] font-semibold text-sm">
                    Seguridad Cifrada
                  </h3>
                  <p className="text-white/50 text-xs mt-1">
                    Protección de datos bajo estándares internacionales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center p-1 rounded-full bg-[#7ECDA7]/20 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-[#7ECDA7]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#D9E1FC] font-semibold text-sm">
                    Alta Disponibilidad
                  </h3>
                  <p className="text-white/50 text-xs mt-1">
                    Infraestructura optimizada para operación continua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <LoginForm />
        </section>
      </div>

      {/* Footer */}
      <footer className="backdrop-blur-[1px] text-center py-6 px-15 text-xs text-white/30 z-20 border-t border-white/5 flex justify-between bg-gradient-to-t from-black/80 via-black/20 via-90% to-transparent">
        <section>
          <p>© 2026 Unytick University. All rights reserved.</p>
        </section>
        {/* Footer Links */}
        <section className="flex gap-6 text-xs text-white/40  ">
          <Link href="#" className="hover:text-white/60 transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white/60 transition">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white/60 transition">
            Accesibilidad
          </Link>
        </section>
      </footer>
    </div>
  );
}
