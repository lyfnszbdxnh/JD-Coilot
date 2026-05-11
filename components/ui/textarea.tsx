import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "min-h-60 w-full resize-none rounded-[24px] border border-slate-200/80 bg-white/70 px-5 py-4 text-sm leading-7 text-slate-800 shadow-inner shadow-slate-950/[0.02] outline-none backdrop-blur placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
