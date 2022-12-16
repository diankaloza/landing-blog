import Photoshop from "./images/Vector.png";
import Ilustrator from "./images/ilustr.png";
import Effects from "./images/Vector (2).png";
import Figma from "./images/figma.png";
import Star from "./images/Star.svg";
import Star1 from "./images/Star (1).svg";
import {
  Working,
  SkillsContainer,
  BlockItem,
  Skill,
  SkillDesc,
  BlockItemText,
  AdFoto,
  AdIl,
  AdE,
} from "../../styles/styles";
import { t } from "../../languages";

export const Skills = () => {
  return (
    <Working>
      <Skill>{t("title.skills")}</Skill>
      <SkillDesc>{t("title.work")}</SkillDesc>
      <SkillsContainer>
        <BlockItem>
          <AdFoto>
            {" "}
            <img src={Photoshop} alt="photoshop" />
          </AdFoto>
          <BlockItemText>Adobe Photoshop </BlockItemText>
          <div>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star1} alt="star" />
          </div>
        </BlockItem>

        <BlockItem>
          <AdIl>
            {" "}
            <img src={Ilustrator} alt="Ilustrator" />
          </AdIl>
          <BlockItemText>Adobe Ilustrator </BlockItemText>
          <div>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
          </div>
        </BlockItem>

        <BlockItem>
          <AdE>
            <img src={Effects} alt="effects" />
          </AdE>
          <BlockItemText>Adobe After Effects </BlockItemText>
          <div>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star1} alt="star" />
          </div>
        </BlockItem>

        <BlockItem>
          <div>
            <img src={Figma} alt="figma" width={90} height={90} />
          </div>
          <BlockItemText>Figma </BlockItemText>
          <div>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star1} alt="star" />
          </div>
        </BlockItem>
      </SkillsContainer>
    </Working>
  );
};
