import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Item { q: string; a: string; }

export const FAQ = ({ items }: { items: Item[] }) => (
  <div className="reveal mx-auto max-w-3xl">
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((it, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-card">
          <AccordionTrigger className="text-left font-display text-lg font-semibold text-ink hover:no-underline">
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{it.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);
