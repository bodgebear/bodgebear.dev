import { Paragraph, H2, H3, H4 } from "components/Typography/Typography";

interface MarkdownHeaderProps {
  level: number;
  children?: React.ReactNode;
}

export const MarkdownHeader = ({
  level,
  children,
  ...props
}: MarkdownHeaderProps) => {
  switch (level) {
    case 1: {
      return (
        <H2 asChild $userSelect="auto" {...props}>
          <h1>{children}</h1>
        </H2>
      );
    }
    case 2: {
      return (
        <H3 asChild $userSelect="auto" {...props}>
          <h2>{children}</h2>
        </H3>
      );
    }
    case 3: {
      return (
        <H4 asChild $userSelect="auto" {...props}>
          <h3>{children}</h3>
        </H4>
      );
    }
    default: {
      const Component = `h${level}` as `h${1 | 2 | 3 | 4 | 5 | 6}`;
      return (
        <Paragraph asChild $userSelect="auto" {...props}>
          <Component>{children}</Component>
        </Paragraph>
      );
    }
  }
};
