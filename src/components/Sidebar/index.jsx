import React from "react";
import {
  SidebarWrapper,
  SideMenu,
  SidebarButton,
  Languages,
  LanguagesMob,
  MobUa,
} from "../../styles/styles";

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contacts</li>
      </ul>

      <SidebarButton>
        <MobUa onClick={onClose}>X</MobUa>
      </SidebarButton>
      <LanguagesMob>
        <span>ENG</span>
        <span>|</span>
        <MobUa> UA</MobUa>{" "}
      </LanguagesMob>
    </SidebarWrapper>
  );
};
