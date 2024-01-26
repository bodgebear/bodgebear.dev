"use client";
import styled from "styled-components";

interface GridProps {
  $colsTemplate?: string;
  $cols?: number;
  $gap?: string;
}

export const Grid = styled.section<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => {
    if (props.$colsTemplate) {
      return `${props.$colsTemplate}`;
    }

    if (props.$cols) {
      return `repeat(${props.$cols}, 1fr)`;
    }

    return "repeat(1, 1fr)";
  }};
  grid-gap: ${(props) => props.$gap || "1rem"};
`;
