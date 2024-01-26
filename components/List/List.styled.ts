"use client";
import styled from "styled-components";

export const UlList = styled.ul`
  position: relative;
  padding-left: 2em;
  counter-reset: item;
`;
export const OlList = styled.ol`
  position: relative;
  padding-left: 2em;
  counter-reset: item;
`;

export const ListItemStyled = styled.li`
  list-style: none;
  counter-increment: item;

  &::before {
    position: absolute;
    left: 0;
  }

  ol > &::before {
    content: counter(item) ".";
  }

  ul > &::before {
    content: "*";
  }
`;
