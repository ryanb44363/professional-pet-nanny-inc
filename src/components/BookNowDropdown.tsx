import { Calendar, ChevronDown, UserPlus, LogIn } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  className?: string;
  triggerClassName?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export const BookNowDropdown = ({
  className,
  triggerClassName,
  showIcon = true,
  children,
}: Props) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button
        className={cn("inline-flex items-center gap-2", triggerClassName)}
      >
        {showIcon && <Calendar className="h-4 w-4" />}
        {children || "Book Now"}
        <ChevronDown className="h-4 w-4" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      className="w-56 rounded-2xl border-border bg-card p-2 shadow-elegant"
    >
      <DropdownMenuItem asChild>
        <a
          href={SITE.newClientHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-ink hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
        >
          <UserPlus className="h-4 w-4 shrink-0" />
          <div>
            <div className="font-semibold">New Client</div>
            <div className="text-xs text-muted-foreground">Create account</div>
          </div>
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a
          href={SITE.existingClientHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-ink hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
        >
          <LogIn className="h-4 w-4 shrink-0" />
          <div>
            <div className="font-semibold">Existing Client</div>
            <div className="text-xs text-muted-foreground">Log in to portal</div>
          </div>
        </a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
