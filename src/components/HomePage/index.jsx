import { About } from "../About";
import { Contacts } from "../Contacts";
import { Header } from "../Header";
import { Portfolio } from "../Portfolio";
import { Skills } from "../Skills";
import {
  Languages,
  Title,
  Image,
  TitleName,
  Container,
  AboutH1,
  Foto,
  Menu,
  Eng,
  Ua,
} from "../../styles/styles";
import Porthret from "./images/Title.png";
import Port from "./images/small.png";
import BurgerMenu from "./images/Group 3.png";
import { Sidebar } from "../Sidebar";
import { useState } from "react";
import { t } from "../../languages";

export const Home = () => {
  const [isActive, setIsActive] = useState("ENG");
  const [isOpen, setIsOpen] = useState(false);
  const [appLanguage, setAppLanguage] = useState(
    localStorage.getItem("language") || "ENG"
  );

  const handleChangeLanguage = (language, e) => {
    localStorage.setItem("language", language);
    setAppLanguage(language);
    setIsActive(language);
    console.log(isActive);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Container>
        {isOpen && <Sidebar isOpen={isOpen} onClose={closeSidebar} />}
        <Header />
        <hr />
        <Title>
          <TitleName>
            <AboutH1>{t("title.text")} </AboutH1>
          </TitleName>
          <TitleName>
            <div>{t("title.description")} </div>
          </TitleName>

          <Languages>
            <Eng
              isActive={isActive === "ENG"}
              onClick={() => handleChangeLanguage("ENG")}
            >
              ENG
            </Eng>
            <span>|</span>
            <Ua
              isActive={isActive === "UA"}
              onClick={() => handleChangeLanguage("UA")}
            >
              {" "}
              UA
            </Ua>{" "}
          </Languages>
          <Menu>
            {!isOpen && (
              <img src={BurgerMenu} alt="menu" onClick={openSidebar} />
            )}
          </Menu>
        </Title>
        <Image>
          <source media="(max-width: 550px)" srcSet={Port} />
          <Foto src={Porthret} alt="portret" />
        </Image>
      </Container>

      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
};
