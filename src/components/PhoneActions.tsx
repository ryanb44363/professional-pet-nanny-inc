import { Phone, MessageSquare, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  /** Class applied to the trigger button — match the surrounding CTA's look. */
  triggerClassName?: string;
  /** Display label. Defaults to the formatted phone number. */
  label?: React.ReactNode;
  /** Icon shown on the trigger. Defaults to Phone. */
  icon?: React.ReactNode;
  /** Show the chevron indicator. */
  showChevron?: boolean;
  /** Dropdown alignment. */
  align?: "start" | "center" | "end";
}

/**
 * Trigger lets the visitor pick Call or Text for the same business number.
 * Reuses SITE.phoneHref (tel:) and SITE.smsHref (sms:).
 */
export const PhoneActions = ({
  triggerClassName,
  label,
  icon,
  showChevron = true,
  align = "end",
}: Props) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button
        type="button"
        aria-label={`Call or text ${SITE.phone}`}
        className={cn("inline-flex items-center gap-2", triggerClassName)}
      >
        {icon ?? <Phone className="h-4 w-4" />}
        {label ?? SITE.phone}
        {showChevron && <ChevronDown className="h-4 w-4 opacity-70" />}
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align={align}
      className="w-56 rounded-2xl border-border bg-card p-2 shadow-elegant"
    >
      <DropdownMenuItem asChild>
        <a
          href={SITE.phoneHref}
          className="flex cursor-pointer items-start gap-3 rounded-xl px-3 py-2.5 text-ink hover:bg-primary/10 focus:bg-primary/10"
        >
          <Phone className="mt-0.5 h-4 w-4 text-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Call us</span>
            <span className="text-xs text-muted-foreground">{SITE.phone}</span>
          </div>
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a
          href={SITE.smsHref}
          className="flex cursor-pointer items-start gap-3 rounded-xl px-3 py-2.5 text-ink hover:bg-primary/10 focus:bg-primary/10"
        >
          <MessageSquare className="mt-0.5 h-4 w-4 text-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Text us</span>
            <span className="text-xs text-muted-foreground">{SITE.phone}</span>
          </div>
        </a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
