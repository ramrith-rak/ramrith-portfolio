import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-tactical focus-visible:ring-2 focus-visible:ring-tactical/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-tactical text-primary-foreground hover:bg-tactical/90 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]",
        outline:
          "border-white/10 bg-transparent hover:bg-white/5 hover:border-tactical hover:text-tactical",
        secondary:
          "bg-obsidian text-foreground border-white/5 hover:border-white/20 aria-expanded:bg-obsidian",
        ghost:
          "hover:bg-tactical/10 hover:text-tactical aria-expanded:bg-tactical/10 aria-expanded:text-tactical",
        destructive:
          "bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30",
        link: "text-tactical underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-2 px-6",
        xs: "h-7 gap-1 px-3 text-[10px]",
        sm: "h-8 gap-1.5 px-4 text-xs",
        lg: "h-12 gap-2.5 px-8 text-base",
        icon: "size-10",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
