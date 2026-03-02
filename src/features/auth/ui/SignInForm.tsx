'use client';

import { SignInDocument, SignInInput } from "@/src/__generated__/graphql";
import { useMutation } from "@apollo/client/react";
import { useForm } from "react-hook-form";
import { onError } from "../utils/on-error.callback";
import { onCompleted } from "../utils/on-completed.callback";
import { Button } from "@/src/shared/components/ui/button";
import { Input } from "@/src/shared/components/ui/input";
import { isEmailRegex } from "../utils/is-email.regex";
import { cn } from "@/src/shared/lib/utils";
import { KeySquare, Mail } from "lucide-react";

export function SignInForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid } 
    } = useForm<SignInInput>({ mode: 'onChange' }); 

    const [
        signInMutation,
        {
            error,
            loading,
        }
    ] = useMutation(SignInDocument, {
        onError: (e) => onError(e, 'Произошла ошибка авторизации'),
        onCompleted: () => onCompleted('Успешная авторизация!'),
    });

    async function signIn(input: SignInInput) {
        try {
            await signInMutation({ variables: { input } });
        } catch (e) {
            onError(e, 'Произошла ошибка авторизации');
        }
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(signIn)}
        >
            <Input
                type="email"
                {...register('email', {
                    required: {
                        value: true,
                        message: 'Электронная почта обязательна к заполнению',
                    },
                    pattern: {
                        value: isEmailRegex,
                        message: 'Укажите настоящую электронную почту',
                    },
                })}
                placeholder="Электронная почта"
                required
                leftLucideIcon={Mail}
                className={cn(
                    'transition-colors',
                    errors.email ? 'border-red-400' : ''
                )}
            />

            {
                errors.email && (
                    <p className="text-sm text-red-400">{ errors.email.message }</p>
                )
            }

            <Input
                type="password"
                {...register('password', {
                    required: {
                        value: true,
                        message: 'Пароль обязателен к заполнению',
                    },
                })}
                placeholder="Пароль"
                required
                leftLucideIcon={KeySquare}
                className={cn(
                    'transition-colors',
                    errors.password ? 'border-red-400' : ''
                )}
            />

            {
                errors.password && (
                    <p className="text-sm text-red-400">{ errors.password.message }</p>
                )
            }

            <Button
                type="submit"
                size={'xl'}
                disabled={loading || !isValid}
            >
                Войти
            </Button>
        </form>
    );
}