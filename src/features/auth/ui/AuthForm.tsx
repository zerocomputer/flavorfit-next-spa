'use client'

import { SignInDocument, SignInInput, SignUpDocument, SignUpInput } from "@/src/__generated__/graphql"
import { Button } from "@/src/shared/components/ui/button";
import { Input } from "@/src/shared/components/ui/input";
import { PAGES } from "@/src/shared/config/page.config";
import { useMutation } from "@apollo/client/react"
import Link from "next/link";
import { AuthFormTip } from "./AuthFormTip";
import { useForm } from "react-hook-form";
import { IAuthFormData } from "../interface";
import { isEmailRegex } from "../utils/is-email.regex";
import { Controller } from 'react-hook-form'; 
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/src/shared/components/ui/select";
import { cn } from "@/src/shared/lib/utils";
import { toast } from "sonner";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

interface AuthFormProps {
    type: 'signIn' | 'signUp'
}

export function AuthForm({ type }: AuthFormProps) {
    const isSignIn = type === 'signIn';

    const {
        control,
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm<SignInInput | SignUpInput>({ mode: 'onChange' });

    const onError = (error: any) => {
        const errorMessage = 
            error.graphQLErrors?.[0]?.message || 
            error.networkError?.message || 
            error.message || 
            'Произошла ошибка';
        toast.error(errorMessage, { id: 'sign-error' });
    }

    const onCompleted = () => {
        toast.success(isSignIn ? 'Успешная авторизация!' : 'Успешная регистрация!', { id: 'sign-success' })
    }

    const [signIn, signInOptions] = useMutation(SignInDocument, { onError, onCompleted });
    const [signUp, signUpOptions] = useMutation(SignUpDocument, { onError });

    const handleAuth = async (input: SignInInput | SignUpInput) => {
        if (isSignIn) {
            await signIn({ variables: { input: input as SignInInput } });
        } else {
            await signUp({ variables: { input: input as SignUpInput } });
        }
};

    return <Card className="max-w-md w-full mx-auto flex flex-col gap-8">
        <CardHeader>
            <CardTitle className="text-2xl text-center">
                {
                    type === 'signUp' ?
                        'Регистрация' :
                        'Авторизация'
                }
            </CardTitle>
        </CardHeader>

        <CardContent>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(handleAuth)}
            >
                {
                    !isSignIn ? (
                        <>
                            <Input
                                type="text"
                                {...register('firstName', { 
                                    required: {
                                        value: !isSignIn,
                                        message: 'Имя обязательно к заполнения',
                                    }
                                })}
                                placeholder="Имя"
                                className={cn(
                                    'transition-colors',
                                    (errors as any)['firstName'] ? 'border-red-400' : ''
                                )}
                            />

                            {
                                (errors as any)['firstName'] && (
                                    <p className="text-sm text-red-400">{ (errors as any)['firstName'].message }</p>
                                )
                        }

                            <Input
                                type="text"
                                {...register('lastName', { 
                                    required: {
                                        value: !isSignIn,
                                        message: 'Фамилия обязательна к заполнения',
                                    }
                                })}
                                placeholder="Фамилия"
                                className={cn(
                                    'transition-colors',
                                    (errors as any)['lastName'] ? 'border-red-400' : ''
                                )}
                            />

                            {
                                (errors as any)['lastName'] && (
                                    <p className="text-sm text-red-400">{ (errors as any)['lastName'].message }</p>
                                )
                        }

                            <Controller
                                name="gender"
                                control={control}
                                rules={{ 
                                    required: {
                                        value: !isSignIn,
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
                                            className={cn(
                                                'w-full transition-colors',
                                                (errors as any)['gender'] ? 'border-red-400' : ''
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
                                (errors as any)['gender'] && (
                                    <p className="text-sm text-red-400">{ (errors as any)['gender'].message }</p>
                                )
                        }
                        </>
                    ) : false
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
                    disabled={signInOptions.loading || signUpOptions.loading}
                >
                    {
                        type === 'signUp' ?
                            'Создать аккаунт' :
                            'Войти в аккаунт'
                    }
                </Button>
            </form>
        </CardContent>

        <CardFooter>
            <AuthFormTip isSignIn={isSignIn} />
        </CardFooter>
    </Card>
}