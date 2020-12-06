import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/pic-2.jpg";
import Icon2 from "../../images/pic-3.jpg";
import Icon3 from "../../images/pic-4.jpg";
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Gift Recommendation</ServicesH2>
            <ServicesP>We help you find the perfect gift in no time</ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>20% Discount</ServicesH2>
            <ServicesP>
              We offer you 20% discount on your first purchase
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Great Variety</ServicesH2>
            <ServicesP>
              Feel free to chose from our large variety of products
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
