import {
  ContactsTitle,
  ContactsText,
  ContactsDescription,
  ContactsButton,
  Img,
  Link,
  Design,
  GitHub,
  DesignWrapper,
} from "../../styles/styles";

import In from "./images/Group 2.svg";
import Insta from "./images/insta.png";
import Be from "./images/Group 9.svg";
import Ball from "./images/ball.png";
import { t } from "../../languages";

export const Contacts = () => {
  return (
    <>
      <ContactsText>
        <ContactsTitle>{t("title.contacts")}</ContactsTitle>
        <ContactsDescription>{t("title.contactstext")}</ContactsDescription>
        <ContactsButton>{t("title.contactsmessage")}</ContactsButton>
        <Img>
          <img src={In} alt="in" />
          <img src={Insta} alt="insta" />
          <img src={Be} alt="be" />

          <img src={Ball} alt="ball" />
        </Img>
        <div> {t("title.social")}</div>
      </ContactsText>
      <hr />
      <Link>
        <div>
          Developed by{" "}
          <GitHub href="https://github.com/diankaloza" target="_blank">
            Diana Loza
          </GitHub>
        </div>
        <div>
          <DesignWrapper>
            <Design
              href="https://www.figma.com/file/5D9pDuLtS042hzaoN69Kd7/Free--Landing--Page-Template?node-id=254%3A516&t=O1EHqLmF2mFVTW00-0"
              target="_blank"
            >
              {" "}
              Open Figma design
            </Design>
          </DesignWrapper>
        </div>
      </Link>
    </>
  );
};
