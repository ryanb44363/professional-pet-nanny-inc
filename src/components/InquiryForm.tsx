import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(25),
  email: z.string().trim().email("Please enter a valid email").max(120),
  petType: z.string().min(1, "Select a pet type"),
  service: z.string().min(1, "Select a service"),
  dates: z.string().trim().max(120).optional().or(z.literal("")),
  address: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

export const InquiryForm = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(fd);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Request received!", description: "We'll reach out within one business day to schedule your meet-and-greet." });
    }, 700);
  };

  const inputCls = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";
  const labelCls = "text-sm font-semibold text-ink";
  const errCls = "mt-1 text-xs font-medium text-destructive";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div>
        <label className={labelCls} htmlFor="name">Your Name</label>
        <input id="name" name="name" className={inputCls} placeholder="Jane Doe" maxLength={80} />
        {errors.name && <p className={errCls}>{errors.name}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="phone">Phone</label>
        <input id="phone" name="phone" className={inputCls} placeholder="513-555-1234" maxLength={25} />
        {errors.phone && <p className={errCls}>{errors.phone}</p>}
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className={inputCls} placeholder="you@example.com" maxLength={120} />
        {errors.email && <p className={errCls}>{errors.email}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="petType">Pet Type</label>
        <select id="petType" name="petType" className={inputCls} defaultValue="">
          <option value="" disabled>Choose…</option>
          <option>Dog</option><option>Cat</option><option>Puppy</option><option>Multiple Pets</option><option>Other</option>
        </select>
        {errors.petType && <p className={errCls}>{errors.petType}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="service">Service Needed</label>
        <select id="service" name="service" className={inputCls} defaultValue="">
          <option value="" disabled>Choose…</option>
          <option>Dog Walking</option><option>Pet Sitting</option><option>Overnight Pet Sitting</option>
          <option>Smart Puppy Plan</option><option>Emergency Pet Sitting</option><option>Install Sitting</option>
        </select>
        {errors.service && <p className={errCls}>{errors.service}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="dates">Dates</label>
        <input id="dates" name="dates" className={inputCls} placeholder="e.g. June 4–10" maxLength={120} />
      </div>
      <div>
        <label className={labelCls} htmlFor="address">Neighborhood / Address</label>
        <input id="address" name="address" className={inputCls} placeholder="Hyde Park, Cincinnati" maxLength={160} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="message">Tell us about your pet(s)</label>
        <textarea id="message" name="message" rows={4} className={inputCls} placeholder="Anything we should know — routines, meds, quirks…" maxLength={800} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-gradient px-6 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-[1.01] disabled:opacity-60"
        >
          <Send className="h-4 w-4" /> {loading ? "Sending…" : "Request My Meet-and-Greet"}
        </button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          We respond within one business day. For urgent requests, please call <a href="tel:+15132447373" className="font-semibold text-primary">513-244-7373</a>.
        </p>
      </div>
    </form>
  );
};
