import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layout";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

function ContactMe() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={"Contact Me"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <input type="text" id="name" placeholder="Name" />
              </div>
              <div className="form-field">
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="form-field">
                <input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="form-field">
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Send Message"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Location"}
              icon={location}
              cont1={"Lima, Perú"}
            />
            <ContactItem title={"Phone"} icon={phone} cont1={"+51-974925689"} />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"fergaldoss@gmail.com"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          font-family: "PT Mono", monospace;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          font-family: "PT Mono", monospace;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;
export default ContactMe;
