import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  InfoColumn1,
  InfoColumn2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  BtnWrap,
  BtnLink,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <InfoColumn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <BtnLink to="/">{buttonLabel}</BtnLink>
                </BtnWrap>
              </TextWrapper>
            </InfoColumn1>
            <InfoColumn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </InfoColumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
