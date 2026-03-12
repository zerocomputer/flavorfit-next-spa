"use client";

import { Logo } from "../../../shared/components/Logo";
import { useAuth } from "../../auth/hooks";
import { HeaderButton } from "./HeaderButton";
import { HeaderNavMenu } from "./HeaderNavMenu";
import { HeaderUser } from "./HeaderUser";
import { Button } from "@/src/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/shared/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/shared/components/ui/dropdown-menu";
import { Input } from "@/src/shared/components/ui/input";
import { Item, ItemContent, ItemTitle } from "@/src/shared/components/ui/item";
import { Label } from "@/src/shared/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/shared/components/ui/popover";
import { ScrollArea } from "@/src/shared/components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/shared/components/ui/tabs";
import { PAGES } from "@/src/shared/config/page.config";
import { cn } from "@/src/shared/lib/utils";
import { BellIcon, HeadsetIcon, LogInIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isNotificationPopoverOpen, setIsNotificationPopoverOpen] =
    useState(false);

  const [isSupportDialogOpen, setIsSupportDialogOpen] = useState(false);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const { user, isAuthorized } = useAuth();

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center px-8 py-4">
        <Link className="mr-8" href={PAGES.DASHBOARD}>
          <Logo className="size-10" />
        </Link>

        <HeaderNavMenu />

        <div className="ml-auto flex items-center gap-4">
          <Dialog
            open={isSupportDialogOpen}
            onOpenChange={setIsSupportDialogOpen}
          >
            <DialogTrigger asChild>
              <HeaderButton isActive={isSupportDialogOpen} icon={HeadsetIcon} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
                    readOnly
                  />
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Popover
            open={isNotificationPopoverOpen}
            onOpenChange={setIsNotificationPopoverOpen}
          >
            <PopoverTrigger asChild>
              <HeaderButton
                isActive={isNotificationPopoverOpen}
                icon={BellIcon}
              />
            </PopoverTrigger>
            <PopoverContent className="w-80 p-2">
              <ScrollArea className="h-72 p-1">
                <Tabs defaultValue="all" className="w-full gap-2">
                  <TabsList variant={"small"} className="w-full">
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="read">Прочитанные</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all">
                    <div className="space-y-1">
                      <Item variant="outline">
                        <ItemContent>
                          <ItemTitle>Уведомление №1</ItemTitle>
                        </ItemContent>
                      </Item>
                    </div>
                  </TabsContent>

                  <TabsContent value="read">
                    <div className="space-y-1">
                      <Item variant="outline">
                        <ItemContent>
                          <ItemTitle>Уведомление №1</ItemTitle>
                        </ItemContent>
                      </Item>
                    </div>
                  </TabsContent>
                </Tabs>
              </ScrollArea>
            </PopoverContent>
          </Popover>

          {isAuthorized ? (
            <DropdownMenu
              open={isUserDropdownOpen}
              onOpenChange={setIsUserDropdownOpen}
            >
              <DropdownMenuTrigger className="outline-0" asChild>
                <HeaderUser
                  avatarUrl="https://github.com/zerocomputer.png"
                  name={`${user!.firstName} ${user!.lastName}`}
                  email={user!.email}
                  isActive={isUserDropdownOpen}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[238px]" align="end">
                <Link href={PAGES.PROFILE}>
                  <DropdownMenuItem>Профиль</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Выйти</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={PAGES.AUTH}>
              <Button variant="accent">
                <LogInIcon size={10} className="mr-1" />
                Войти в аккаунт
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
