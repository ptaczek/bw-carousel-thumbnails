import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  box-sizing: border-box;
  border-radius: 50%;
  border: solid 1px #cdd8df;

  overflow: hidden;

  background-color: white;

  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ThumbnailImage = ({ url }) => (
  <Container>
    <img src={url} alt={url} />
  </Container>
);
