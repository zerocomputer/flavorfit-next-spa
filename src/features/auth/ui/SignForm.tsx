import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/shared/components/ui/tabs"
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { UserRoundKeyIcon, UserRoundPlusIcon } from "lucide-react";


export function SignForm() {
    return (
        <Tabs
            defaultValue="signIn"
            className="mx-auto max-w-md w-full"
        >
            <TabsList className="w-full" variant={'primary'}>
                <TabsTrigger value="signIn">
                    <UserRoundKeyIcon className="size-4" />
                    Авторизация
                </TabsTrigger>

                <TabsTrigger value="signUp">
                    <UserRoundPlusIcon className="size-4" />
                    Регистрация
                </TabsTrigger>
            </TabsList>

            <TabsContent
                value="signIn"
                className="animate-in fade-in slide-in-from-left-4 duration-400"
            >
                <SignInForm />
            </TabsContent>

            <TabsContent
                value="signUp"
                className="animate-in fade-in slide-in-from-left-4 duration-400"
            >
                <SignUpForm />
            </TabsContent>
        </Tabs>
    );
}