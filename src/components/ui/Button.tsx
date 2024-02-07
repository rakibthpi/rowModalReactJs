import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";
type TRef = HTMLButtonElement;
type TVeriant = "solid" | "dotted" | "golden";
type tVarients = {
  variant?: TVeriant;
};

type TVariant = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  tVarients;

const Button = forwardRef<TRef, TVariant>(
  ({ className, variant, ...rest }, ref) => {
    const variandBtn = (variant = "solid") => {
      switch (variant) {
        case "solid":
          return "btn-solid";
        case "dotted":
          return "btn-dotted";
        default:
          return "btn-golden";
      }
    };
    console.log(ref);
    return (
      <div className="text-center">
        <button
          {...rest}
          ref={ref}
          className={cn(variandBtn(variant), className)}
        >
          {rest && rest?.children}
        </button>
      </div>
    );
  }
);

export default Button;
