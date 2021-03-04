/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import ContactRow from "./ContactRow";
import ContactForm from "./ContactForm";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Title subtitle="HAVE QUESTION?" title="CONTACT US" />
    <Container>
      <div className="contactInfo">
        <ContactRow
          contactSubtitle="Address:"
          contactTitle=" 1966 John Calvin , Chicago"
        />
        <ContactRow contactSubtitle="Phone:" contactTitle="(708)-931-8926" />
        <ContactRow
          contactSubtitle="Email:"
          contactTitle="conferapp@gmail.com"
        />
        <ContactRow
          contactSubtitle="Website:"
          contactTitle="conferapp.netlify.app"
        />
      </div>
      <ContactForm />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 100px 0;
  background: #151853;
  .title {
    p {
      color: #df42b1;
    }
  }
  .container {
    padding: 60px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 670px) {
    .container {
      flex-direction: column;
    }
  }
`;

export default Contact;
