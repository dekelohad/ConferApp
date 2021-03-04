/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import AboutBg from "../../img/aboutBg.png";

const AboutInfo = () => (
  <div css={styles} className="aboutInfo">
    <div className="aboutDesc">
      <span>ABOUT CONFERENCE</span>
      <h2>WELCOME TO The React Summit Conference</h2>
      <p>
        A three-day conference on all things React, gathering Front-end and
        Full-stack engineers across the globe in the cloud. To help you stay
        up-to-date on the latest React tech, we're coming back with a new remote
        gig on October 14-16, 2020. Mark your calendars for the biggest virtual
        event for the React community. Besides the conference talks delivered by
        well-known pros, be prepared for awesome MCs and a number of virtual
        networking activities, interactive entertainment, and engaging
        challenges for all participants.
      </p>
      <Button btnTitle="Interested" />
    </div>
    <img src={AboutBg} alt="about" />
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .aboutDesc {
    width: 100%;
    max-width: 520px;
    color: #fff;
    span {
      color: #df42b1;
      border-bottom: 2px solid #4b4d7b;
    }
    h2 {
      font-size: 40px;
      line-height: 1.2;
      margin: 26px 0;
    }
    p {
      font-size: 15px;
      line-height: 1.8;
    }
    .btn {
      margin: 64px 0 0 0;
    }
  }
  @media (max-width: 876px) {
    flex-direction: column;
    img {
      margin: 50px 0 0 0;
      max-width: 94%;
    }
    .aboutDesc {
      h2 {
        font-size: 30px;
      }
      .btn {
        margin: 20px 0 0 0;
      }
    }
  }
  @media (min-width: 877px) and (max-width: 1120px) {
    .aboutDesc,
    img {
      max-width: 48%;
    }
    .aboutDesc {
      h2 {
        font-size: 28px;
      }
    }
  }
`;

export default AboutInfo;
