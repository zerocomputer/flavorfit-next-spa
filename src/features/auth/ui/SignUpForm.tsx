'use client';

import { SignUpDocument, SignUpInput } from "@/src/__generated__/graphql";
import { useMutation } from "@apollo/client/react";
import { Controller, useForm } from "react-hook-form";
import { onError } from "../utils/on-error.callback";
import { onCompleted } from "../utils/on-completed.callback";
import { Button } from "@/src/shared/components/ui/button";
import { Input } from "@/src/shared/components/ui/input";
import { isEmailRegex } from "../utils/is-email.regex";
import { cn } from "@/src/shared/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/src/shared/components/ui/select";
import { ArrowRight, KeySquare, Mail, Signature, VenusAndMars } from "lucide-react";

export function SignUpForm() {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isValid } 
    } = useForm<SignUpInput>({ mode: 'onChange' }); 

    const [
        signUpMutation,
        {
            error,
            loading,
        }
    ] = useMutation(SignUpDocument, {
        onError: (e) => onError(e, 'Произошла ошибка создания аккаунта'),
        onCompleted: () => onCompleted('Успешная авторизация!'),
    });

    async function signUp(input: SignUpInput) {
        try {
            await signUpMutation({ variables: { input } });
        } catch (e) {
            onError(e, 'Произошла ошибка создания аккаунта');
        }
    }

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(signUp)}
        >
            <Input
                type="text"
                {...register('firstName', { 
                    required: {
                        value: true,
                        message: 'Имя обязательно к заполнения',
                    }
                })}
                placeholder="Имя"
                leftLucideIcon={Signature}
                className={cn(
                    'transition-colors',
                    errors.firstName ? 'border-red-400' : ''
                )}
            />

            {
                errors.firstName && (
                    <p className="text-sm text-red-400">{ errors.firstName.message }</p>
                )
            }

            <Input
                type="text"
                {...register('lastName', { 
                    required: {
                        value: true,
                        message: 'Фамилия обязательна к заполнения',
                    }
                })}
                placeholder="Фамилия"
                leftLucideIcon={Signature}
                className={cn(
                    'transition-colors',
                    errors.lastName ? 'border-red-400' : ''
                )}
            />

            {
                errors.lastName && (
                    <p className="text-sm text-red-400">{ errors.lastName.message }</p>
                )
            }

            <Controller
                name="gender"
                control={control}
                rules={{ 
                    required: {
                        value: true,
                        message: 'Выберите свой пол',
                    }
                }}
                render={({ field, fieldState: { error } }) => (
                    <Select 
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                    >
                        <SelectTrigger
                            leftLucideIcon={VenusAndMars}
                            className={cn(
                                'w-full transition-colors',
                                errors.gender ? 'border-red-400' : ''
                            )}
                        >
                            <SelectValue placeholder="Выберите пол" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="MAN">Мужской</SelectItem>
                                <SelectItem value="WOMAN">Женский</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
            />

            {
                errors.gender && (
                    <p className="text-sm text-red-400">{ errors.gender.message }</p>
                )
            }

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
                className="transition-all hover:rounded-sm"
                disabled={loading || !isValid}
            >
                Создать
            </Button>
        </form>
    );
}