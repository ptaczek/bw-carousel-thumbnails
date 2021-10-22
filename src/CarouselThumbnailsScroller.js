import React from "react";
import styled from "styled-components";
import { CarouselThumbnails } from "./CarouseThumbnails";

const ScrollContainer = styled.div`
  margin-top: 32px;
  display: inline-flex;
  width: 300px;
  overflow-x: auto;
  background-color: white;
`;

export const CarouselThumbnailsScroller = (props) => {
  return (
    <ScrollContainer>
      <CarouselThumbnails imgUrls={props.imgUrls} />
    </ScrollContainer>
  );
};
