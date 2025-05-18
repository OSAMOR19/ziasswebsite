"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  { 
    variants: {
      variant: {
        default: "bg-cybernovr-purple text-white hover:bg-cybernovr-purple/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-cybernovr-purple bg-background text-cybernovr-purple hover:bg-cybernovr-purple/10",
        secondary: "bg-cybernovr-blue text-white hover:bg-cybernovr-blue/80",
        ghost: "hover:bg-cybernovr-purple/10 hover:text-cybernovr-purple",
        link: "text-cybernovr-purple underline-offset-4 hover:underline",
        red: "bg-cybernovr-red text-white hover:bg-cybernovr-red/90",
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
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
