import { t } from "../../languages";
import {
  AboutMe,
  AboutT,
  Description,
  DescriptionContainer,
} from "../../styles/styles";

export const About = () => {
  return (
    <AboutMe>
      <AboutT> {t("title.aboutMe")}</AboutT>
      <DescriptionContainer>
        <Description>{t("title.sentence1")}</Description>
        <Description>{t("title.sentence2")}</Description>
        <Description>{t("title.sentence3")}</Description>
      </DescriptionContainer>
    </AboutMe>
  );
};
