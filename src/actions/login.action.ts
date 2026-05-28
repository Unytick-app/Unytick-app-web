
import { createUser } from "@/services/auth.service";

export async function createUserAction() {
    await createUser();
}