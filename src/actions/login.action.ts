

import { createUser, loginUser } from "@/services/auth.service";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { Router } from "next/router";

export async function loginAction(formData: FormData) {
    const correo = formData.get("correo") as string;
    const clave = formData.get("clave") as string;
    
    console.log(`Correo: ${correo}, Clave: ${clave}`);

     const res = await signIn("credentials",{
        correo,
        clave,
        redirect: false,
        
    })
    if(!res?.ok){
      console.log("hubo algun error "+res);
    }
    console.log("Respuesta de signIn:", res);
    redirect("/home");

      
}
export async function createUserAction() {
    // Implementar logica para crear un nuevo usuario
    await createUser();
}