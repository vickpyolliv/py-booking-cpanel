import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary-3 active:bg-primary-6 disable:bg-accent-8 text-white ",
        neutral:
          "bg-accent-17 hover:bg-accent-13 active:bg-accent-17 disable:bg-accent-7 text-white ",
        blue: "bg-blue-5 hover:bg-blue-3 active:bg-blue-6 disable:bg-accent-7 text-white ",
        warning:
          "bg-warning-5 hover:bg-warning-3 active:bg-warning-6 disable:bg-accent-7 text-white ",
        error:
          "bg-error-5 hover:bg-error-3 active:bg-error-6 disable:bg-accent-7 text-white ",
        purple:
          "bg-pur-7 hover:bg-pur-4 active:bg-pur-7 disable:bg-accent-7 text-white ",
        success:
          "bg-success-6 hover:bg-success-4 active:bg-success-7 disable:bg-accent-7 text-white ",

        primaryGoast:
          "bg-primary-0 hover:bg-primary-1 active:bg-primary-2 disable:bg-accent-5 text-primary ",
        blueGoast:
          "bg-blue-0 hover:bg-blue-1 active:bg-blue-2 disable:bg-accent-6 text-blue-5 ",
        warningGoast:
          "bg-warning-0 hover:bg-warning-1 active:bg-warning-2 disable:bg-accent-5 text-warning-6 ",
        errorGoast:
          "bg-error-0 hover:bg-error-1 active:bg-error-2 disable:bg-accent-6 text-error-5 ",
        purpleGoast:
          "bg-pur-1 hover:bg-pur-2 active:bg-pur-3 disable:bg-accent-5 text-pur-6 ",
        successGoast:
          "bg-success-0 hover:bg-success-1 active:bg-success-2 disable:bg-accent-5 text-success-7 ",

        primarySecondary:
          "bg-white hover:bg-primary-1 active:bg-primary-2 disable:bg-accent-5 text-primary border-2 border-primary-active ",
        neutralSecondary:
          "bg-white hover:bg-primary-1 active:bg-primary-2 disable:bg-accent-5 text-primary border-2 border-primary-active",
        blueSecondary:
          "bg-white hover:bg-blue-1 active:bg-blue-2 disable:bg-accent-6 text-blue-5 border-2 ",
        warningSecondary:
          "bg-white hover:bg-warning-1 active:bg-warning-2 disable:bg-accent-5 text-warning-6 border-2 ",
        errorSecondary:
          "bg-white hover:bg-error-1 active:bg-error-2 disable:bg-accent-6 text-error-5 border-2 ",
        purpleSecondary:
          "bg-white hover:bg-pur-2 active:bg-pur-3 disable:bg-accent-5 text-pur-6 border-2 ",
        successSecondary:
          "bg-white hover:bg-success-1 active:bg-success-2 disable:bg-accent-5 text-success-7 border-2 ",

        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & { asChild?: boolean }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref} // ⚡ Forward ref here
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
