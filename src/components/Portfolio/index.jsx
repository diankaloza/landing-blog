import WorkFoto from "./images/123.png";
import WorkFoto1 from "./images/reebok_web.png";
import WorkFoto2 from "./images/braun.png";

import {
  Portfolio1,
  H1,
  PortfolioText,
  Media,
  MediaImg,
} from "../styles/styles";

export const Portfolio = () => {
  return (
    <Portfolio1>
      <H1>Portfolio</H1>
      <Media>
        <MediaImg src={WorkFoto} alt="foto" />
      </Media>
      <PortfolioText>Online fashion store - Homepage</PortfolioText>
      <MediaImg src={WorkFoto1} alt="reebook" />
      <PortfolioText>Reebok Store - Concept</PortfolioText>
      <MediaImg src={WorkFoto2} alt="braun" />
      <PortfolioText>Braun Landing Page - Concept</PortfolioText>
    </Portfolio1>
  );
};
