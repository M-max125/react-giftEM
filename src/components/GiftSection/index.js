import React, { useState } from "react";
import {
  GiftContainer,
  GiftBg,
  VideoBg,
  GiftContent,
  GiftHeading,
  GiftText,
  GiftBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./GiftElements";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElement";

const GiftSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!setHover);
  };
  return (
    <>
      <GiftContainer id="home">
        <GiftBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" playsInline/>
        </GiftBg>
        <GiftContent>
          <GiftHeading>Online Gift Shopping Made More Fun</GiftHeading>
          <GiftText>
            Sign up for a shopping adventure today and you receive a 20%
            discount on your first purchase!
          </GiftText>
          <GiftBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </GiftBtnWrapper>
        </GiftContent>
      </GiftContainer>
    </>
  );
};

export default GiftSection;
