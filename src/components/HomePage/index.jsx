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
  Ru,
  Image1,
  Menu,
  MenuBurger,
} from "../styles/styles";
import Porthret from "./images/Title.png";
import Port from "./images/small.png";

export const Home = () => {
  return (
    <Container>
      <Header />
      <hr />
      <Title>
        <TitleName>
          <AboutH1>Denis </AboutH1>
          <AboutH1>Novik</AboutH1>
        </TitleName>
        <TitleName>
          <div>UI/UX designer </div>
          <div>24 years old, Minsk</div>
        </TitleName>

        <Languages>
          {" "}
          <span>ENG|</span>
          <Ru> RU</Ru>{" "}
        </Languages>
        <Menu>
          <MenuBurger>
            <span></span>
          </MenuBurger>
        </Menu>
      </Title>
      <Image>
        <img src={Porthret} alt="portret"></img>
      </Image>
      <Image1>
        <img src={Port} alt="port2" />
      </Image1>

      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </Container>
  );
};
