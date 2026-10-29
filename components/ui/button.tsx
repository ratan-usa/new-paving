import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-red text-white hover:bg-brand-dark shadow-sm",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/10",
        outlineDark:
          "border border-surface-borderdark bg-transparent text-white hover:bg-white/5",
        secondary:
          "bg-surface-darkcard text-white hover:bg-surface-darkcardalt",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-brand-red underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-[15px]",
        sm: "h-9 rounded-sm px-3 text-xs",
        lg: "h-12 rounded-sm px-6 text-base font-bold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

