import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    let variantStyles = "bg-primary text-white hover:bg-primary/90";
    if (variant === "ghost") {
      variantStyles = "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900";
    } else if (variant === "outline") {
      variantStyles = "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700";
    } else if (variant === "secondary") {
      variantStyles = "bg-slate-100 text-slate-900 hover:bg-slate-200";
    } else if (variant === "destructive") {
      variantStyles = "bg-red-500 text-white hover:bg-red-600";
    }

    let sizeStyles = "h-9 px-4 py-2 text-sm";
    if (size === "sm") {
      sizeStyles = "h-7 px-2.5 text-xs";
    } else if (size === "lg") {
      sizeStyles = "h-11 px-8 text-base";
    } else if (size === "icon") {
      sizeStyles = "h-8 w-8 p-0 flex items-center justify-center";
    }

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-40 select-none cursor-pointer ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
