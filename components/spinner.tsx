import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-6 w-6",
      icon: "h-10 w-10",
      md: "h-12 w-12",
      lg: "h-16 w-16",
    },
    defaultVariants: {
      size: "default",
    },
  },
});

type SpinnerProps = VariantProps<typeof spinnerVariants>;
export const Spinner = ({ size }: SpinnerProps) => {
  return <Loader className={cn(spinnerVariants({ size }))} />;
};
