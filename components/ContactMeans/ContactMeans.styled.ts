"use client";
import styled from "styled-components";
import { white } from "constants/variables";

export const Container = styled.a`
  color: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  padding: 1rem;

  &:hover {
    opacity: 0.6;
  }

  &:focus-visible {
    box-shadow: 0 0.25em ${white}, 0 -0.25em ${white}, 0.25em 0 ${white},
      -0.25em 0 ${white};
  }
`;

export const Image = styled.img`
  width: 10rem;
  image-rendering: pixelated;
  margin-bottom: 1rem;
  user-select: none;
`;
