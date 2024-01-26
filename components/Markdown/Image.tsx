import { StyledMarkdownImage } from "./Image.styled";

type MarkdownImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export const MarkdownImage = (props: MarkdownImageProps) => {
  return <StyledMarkdownImage draggable="false" {...props} />;
};
