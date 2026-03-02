import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/shared/components/ui/tabs"
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";


export function SignForm() {
    return (
        <Tabs
            defaultValue="signIn"
            className="mx-auto max-w-md w-full"
        >
            <TabsList className="w-full" variant={'primary'}>
                <TabsTrigger value="signIn">Авторизация</TabsTrigger>
                <TabsTrigger value="signUp">Регистрация</TabsTrigger>
            </TabsList>

            <TabsContent value="signIn">
                <SignInForm />
            </TabsContent>

            <TabsContent value="signUp">
                <SignUpForm />
            </TabsContent>
        </Tabs>
    );
}