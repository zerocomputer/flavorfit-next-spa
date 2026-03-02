import { toast } from "sonner";

export function onError(
    error: any,
    templateMessage: string = 'Произошла ошибка'
) {
    const errorMessage = 
        error.graphQLErrors?.[0]?.message || 
        error.networkError?.message || 
        error.message || 
        templateMessage;
    toast.error(errorMessage, { id: 'sign-error' });
}