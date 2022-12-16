import WorkFoto from "./images/123.png";
import WorkFoto1 from "./images/reebok_web.png";
import WorkFoto2 from "./images/braun.png";

import {
  Portfolio1,
  H1,
  PortfolioText,
  Media,
  MediaImg,
  LastPortfolioText,
} from "../../styles/styles";
import { t } from "../../languages";

export const Portfolio = () => {
  return (
    <Portfolio1>
      <H1>{t("title.portfolio")}</H1>
      <Media>
        <MediaImg src={WorkFoto} alt="foto" />
      </Media>
      <PortfolioText>{t("title.store1")}</PortfolioText>
      <MediaImg src={WorkFoto1} alt="reebook" />
      <PortfolioText>{t("title.store2")}</PortfolioText>
      <MediaImg src={WorkFoto2} alt="braun" />
      <LastPortfolioText>{t("title.store3")}</LastPortfolioText>
    </Portfolio1>
  );
};
