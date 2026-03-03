import { LucideIcon } from "lucide-react";

interface HeaderButtonProps { 
    icon: LucideIcon;
}

export function HeaderButton({ icon: Icon }: HeaderButtonProps) {
    return (
        <button
            className="size-10 rounded-full bg-muted p-2 flex items-center justify-center"
        >
            <Icon className="size-5" />
        </button>
    );
}