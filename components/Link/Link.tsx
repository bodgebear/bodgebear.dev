import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { LinkStyled } from "./Link.styled";

type LinkProps = React.ComponentProps<typeof LinkStyled> & {
  asChild?: boolean;
};
export const Link = ({ asChild, ...props }: LinkProps) => (
  <LinkStyled $muted as={asChild ? Slot : "a"} {...props} />
);
