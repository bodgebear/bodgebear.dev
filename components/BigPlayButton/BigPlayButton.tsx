import { StyledBigPlayButton } from "./BigPlayButton.styled";

interface BigPlayButtonProps {
  playNowUrl?: string;
}
export const BigPlayButton = (props: BigPlayButtonProps) => {
  if (props.playNowUrl == null) {
    return null;
  }

  return (
    <StyledBigPlayButton href={props.playNowUrl} target="_blank">
      Play now!
    </StyledBigPlayButton>
  );
};
