import React from "react";
import styled from "styled-components";
import { ThumbnailImage } from "./ThumbnailImage";

const ThumbnailsStrip = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const Thumbnail = styled.div`
  display: flex;
  box-sizing: border-box;

  padding: 2px;
  margin: 0 4px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  border: solid 3px transparent;
  border-radius: 50%;
  background-color: white;

  &.selected {
    border-color: #abb3b9;
  }
`;

export const CarouselThumbnails = ({ imgUrls }) => {
  return (
    <ThumbnailsStrip>
      {imgUrls.map((url, index) => (
        <Thumbnail
          key={`carousel_tumbnail_${index}`}
          className={index === 1 ? "selected" : ""}
        >
          <ThumbnailImage url={url} />
        </Thumbnail>
      ))}
    </ThumbnailsStrip>
  );
};
