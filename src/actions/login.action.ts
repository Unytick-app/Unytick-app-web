
import { createUser } from "@/services/auth.service";
import { signIn } from "next-auth/react";

type LoginActionResult = {
    ok: boolean;
    error?: string;
};

export async function loginAction(formData: FormData): Promise<LoginActionResult> {
    const correo = formData.get("correo") as string;
    const clave = formData.get("clave") as string;

    try {
        const res = await signIn("credentials", {
            correo,
            clave,
            redirect: false,
        });

        if (!res?.ok) {
            return {
                ok: false,
                error: "Credenciales invalidas. Verifique su usuario y clave.",
            };
    }

        return { ok: true };
    } catch {
        return {
            ok: false,
            error: "No fue posible iniciar sesion. Intente nuevamente.",
        };
    }
}

export async function createUserAction() {
    await createUser();
}