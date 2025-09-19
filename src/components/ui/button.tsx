import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:scale-105 hover:shadow-colorful shadow-elegant transition-bounce",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-elegant",
        outline: "border border-input bg-background hover:bg-gradient-glow hover:text-accent-foreground hover:border-primary transition-smooth",
        secondary: "bg-gradient-secondary text-secondary-foreground hover:scale-105 hover:shadow-neon shadow-elegant transition-bounce",
        tertiary: "bg-gradient-tertiary text-tertiary-foreground hover:scale-105 hover:shadow-colorful shadow-elegant transition-bounce",
        ghost: "hover:bg-gradient-glow hover:text-accent-foreground transition-smooth",
        link: "text-primary underline-offset-4 hover:underline transition-smooth",
        google: "bg-card border border-border text-foreground hover:bg-gradient-glow hover:border-primary shadow-elegant transition-smooth",
        rainbow: "bg-gradient-rainbow text-primary-foreground hover:scale-110 hover:shadow-neon shadow-colorful transition-bounce animate-pulse",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
