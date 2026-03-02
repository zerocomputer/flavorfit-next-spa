import { toast } from "sonner";

export function onCompleted(message: string = 'Успех!') {
    toast.success(message, { id: 'sign-success' });
}