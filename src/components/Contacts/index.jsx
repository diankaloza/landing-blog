import {
  ContactsTitle,
  ContactsText,
  ContactsDescription,
  ContactsButton,
  Img,
} from "../styles/styles";

import In from "./images/Vector.png";
import Insta from "./images/insta.png";
import Be from "./images/Vector.png";
import Ball from "./images/ball.png";

export const Contacts = () => {
  return (
    <ContactsText>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactsDescription>
        Want to know more or just chat? You are welcome!
      </ContactsDescription>
      <ContactsButton>Send message</ContactsButton>
      <Img>
        <img src={In} alt="in" />
        <img src={Insta} alt="insta" />
        <img src={Be} alt="be" />

        <img src={Ball} alt="ball" />
      </Img>
      <div> Like me on LinkedIn, Instagram, Behance, Dribble</div>
    </ContactsText>
  );
};
