'use client'

import { useSignInMutation } from "@/src/__generated__/output"

interface AuthFormProps {
    type: 'signIn' | 'signUp'
}

export function AuthForm({ type }: AuthFormProps) {
    const mutation = useSignInMutation();

    return <div>
        <h1>
            {
                type === 'signUp' ?
                    'Регистрация' :
                    'Авторизация'
            }
        </h1>

        <form>
            <input type="email" name="email" placeholder="Email" required />

            <button>
                {
                    type === 'signUp' ?
                        'Создать аккаунт' :
                        'Войти в аккаунт'
                }
            </button>
        </form>
    </div>
}