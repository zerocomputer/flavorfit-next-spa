'use client'

import { SignInDocument, SignUpDocument } from "@/src/__generated__/graphql"
import { Button } from "@/src/shared/components/ui/button";
import { Input } from "@/src/shared/components/ui/input";
import { PAGES } from "@/src/shared/config/page.config";
import { useMutation } from "@apollo/client/react"
import Link from "next/link";

interface AuthFormProps {
    type: 'signIn' | 'signUp'
}

export function AuthForm({ type }: AuthFormProps) {
    const isSignIn = type === 'signIn';
    const [sign, { data, loading, error }] = useMutation(
        isSignIn ?
            SignInDocument :
            SignUpDocument
    );
    
    // sign({
    //     variables: {
    //         input: isSignIn ?
    //             {
    //                 email: '',
    //                 password: ''
    //             } :
    //             {
    //                 email: '',
    //                 firstName: '',
    //                 gender: '',
    //                 lastName: '',
    //                 password: ''
    //             }
    //     }
    // })

    return <div className="max-w-xl mx-auto flex flex-col gap-8">
        <h1 className="text-center font-bold text-2xl">
            {
                type === 'signUp' ?
                    'Регистрация' :
                    'Авторизация'
            }
        </h1>

        <form className="flex flex-col gap-4">
            {
                !isSignIn ? (
                    <>
                        <Input type="text" name="firstName" placeholder="Имя" required />
                        <Input type="text" name="lastName" placeholder="Фамилия" required />
                    </>
                ) : false
            }
            <Input type="email" name="email" placeholder="Электронная почта" required />
            <Input type="password" name="password" placeholder="Пароль" required />

            <Button
                type="submit"
                disabled={loading || !!error}
            >
                {
                    type === 'signUp' ?
                        'Создать аккаунт' :
                        'Войти в аккаунт'
                }
            </Button>

            <div>
                {
                    isSignIn ?
                        (
                            <div>
                                Нет аккаунта? <Link className="text-primary" href={PAGES.SIGN_UP}>Создать аккаунт!</Link>
                            </div>
                        ):
                        (
                            <div>
                                Уже есть аккаунт? <Link className="text-primary" href={PAGES.SIGN_IN}>Войти!</Link>
                            </div>
                        )
                }
            </div>
        </form>
    </div>
}