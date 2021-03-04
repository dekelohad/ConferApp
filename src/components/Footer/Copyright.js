/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Copyright = () => (
  <div className="copyright" css={styles}>
    <p>Ohad Dekel | ©2020 All rights reserved</p>
  </div>
);

const styles = css`
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #414269;
  p {
    font-size: 14px;
    color: #9293bc;
    margin: 0 auto;

    a {
      text-decoration: none;
      color: #fff;
      display: inline-block;
      transition: color 300ms ease-in-out;
      &:hover {
        color: #df42b1;
      }
    }
  }
  @media (max-width: 890px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    p {
      br {
        display: none;
      }
    }
  }
`;

export default Copyright;
