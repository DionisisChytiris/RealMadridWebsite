import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const BMW = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RealLogoTopSection text="BMW" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.BMW} alt="bmw" />
            </div>
            <div className="inside-txt-title1">DO YOU LIKE DRIVING?</div>
            <div className="inside-txt-bx3">
              BMW, the German automotive manufacturer, combines dynamic and
              sporty performance with breathtaking design to deliver the perfect
              combination of driving pleasure. But this enjoyment of driving
              goes far beyond mobility: sustainability is a core issue for us
              and we do not compromise on it. We approach sustainability in a
              holistic manner. That&apos;s why we take it into account in the
              development and production of all our vehicles.
            </div>
            <div className="inside-txt-title">
              BMW i. THE FUTURE OF MOBILITY. TODAY.
            </div>
            <div className="inside-txt-bx3">
              BMW i embodies our range of fully or partially electrically
              powered vehicles. These models are inspired by a new understanding
              of the balance between the car and sustainability - a holistic and
              innovative approach that is redefining sustainable premium
              mobility.
            </div>
            <div className="inside-txt-bx2">
              The BMW Group, which comprises the four brands BMW, MINI, Rolls
              Royce and BMW Motorrad, is the world&apos;s leading manufacturer of
              premium automobiles and motorbikes and is also a provider of
              premium financial and mobility services. The BMW Group&apos;s
              production network encompasses 31 production and assembly sites in
              15 countries and the company boasts a global sales network in more
              than 140 countries.
            </div>
            <div className="inside-txt-bx2">
              In 2021, the BMW Group sold more than 2.5 million passenger cars
              and in excess of 194,000 motorbikes globally. Profit before tax in
              the 2021 financial year was around €16.100 billion on revenue of
              approximately €111.200 billion. As of 31 December 2021, the BMW
              Group had 118,909 employees.
            </div>
            <div className="inside-txt-bx2">
              The BMW Group&apos;s success has consistently been built on long-term
              planning and responsible action. The company mapped out the course
              of the future early on and systematically focuses on
              sustainability and resource-efficient management in its strategic
              direction - from the supply chain to production and right through
              to the consumer end of all products..
            </div>
            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BMW;
