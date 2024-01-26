import type { MDXComponents } from "mdx/types";
import { MarkdownHeader } from "./components/Markdown/Header";
import { Paragraph } from "components/Typography/Typography";
import { Link } from "components/Link/Link";
import { UlList, OlList } from "components/List/List";
import { ListItem } from "components/List/ListItem";
import { MarkdownImage } from "./components/Markdown/Image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: (props) => <Paragraph $muted $userSelect="auto" {...props} />,
    strong: (props) => (
      <Paragraph $userSelect="auto" asChild>
        <strong {...props} />
      </Paragraph>
    ),
    code: ({ children, ...props }) => (
      <Paragraph $userSelect="auto" {...props} asChild>
        <code>{children}</code>
      </Paragraph>
    ),
    img: (props) => <MarkdownImage {...props} />,
    ul: (props) => <UlList {...props} />,
    ol: (props) => <OlList {...props} />,
    li: (props) => <ListItem {...props} />,
    a: Link,
    h1: (props) => <MarkdownHeader level={1} {...props} />,
    h2: (props) => <MarkdownHeader level={2} {...props} />,
    h3: (props) => <MarkdownHeader level={3} {...props} />,
    h4: (props) => <MarkdownHeader level={4} {...props} />,
    h5: (props) => <MarkdownHeader level={5} {...props} />,
    h6: (props) => <MarkdownHeader level={6} {...props} />,
    ...components,
  };
}
