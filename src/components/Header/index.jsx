import { t } from "../../languages";
import { Nav, NavElem, NavElem1 } from "../../styles/styles";

export const Header = () => {
  return (
    <Nav>
      <NavElem1>{t("title.home")}</NavElem1>
      <NavElem>{t("title.about")}</NavElem>
      <NavElem>{t("title.skills")}</NavElem>
      <NavElem>{t("title.portfolio")}</NavElem>
      <NavElem>{t("title.contacts")}</NavElem>
    </Nav>
  );
};
