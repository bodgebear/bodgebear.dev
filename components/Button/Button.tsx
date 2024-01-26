"use client";
import { StyledButton } from "./Button.styled";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}
export const Button = ({ asChild, ...props }: ButtonProps) => {
  const as = asChild ? Slot : "button";

  return <StyledButton as={as} {...props} />;
};
