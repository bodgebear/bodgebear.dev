import { ComponentProps } from "react";
import { ListItemStyled } from "./List.styled";
import { Paragraph } from "components/Typography/Typography";

export const ListItem = ({
  children,
  ...props
}: ComponentProps<typeof ListItemStyled>) => (
  <Paragraph {...props} $muted asChild $userSelect="auto">
    <ListItemStyled>{children}</ListItemStyled>
  </Paragraph>
);
