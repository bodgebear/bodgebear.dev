"use client";
import styled from "styled-components";
import { Text } from "../Typography/Typography.styled";
import Link from "next/link";
import { black, white } from "constants/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const A = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  flex: 1 1;
  outline: 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 0.25em;
  margin: -0.25em;

  &::before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 0.25em ${black};
  }

  ${Wrapper}:has(${A}:hover) &, ${Wrapper}:has(${A}:focus-visible) & {
    box-shadow: 0 0.25em 0 ${white}, 0 -0.25em 0 ${white}, 0.25em 0 0 ${white},
      -0.25em 0 0 ${white};
  }
`;

export const Image = styled.img.attrs({ draggable: false })`
  width: 100%;
  user-select: none;
  aspect-ratio: 16 / 9;
  image-rendering: pixelated;
`;

export const Description = styled(Text)`
  flex: 1 1;
`;
