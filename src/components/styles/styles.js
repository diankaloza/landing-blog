import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  padding: 30px 0px;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  @media (max-width: 560px) {
    display: none;
  }
`;

export const NavElem = styled.div`
  color: #828282;
  font-weight: 700;
  letter-spacing: 2px;
`;
export const NavElem1 = styled.div`
  color: black;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Title = styled.div`
  justify-content: space-evenly;
  align-items: center;
  margin: 40px 0px;
  display: flex;
  gap: 180px;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    margin: 20px 50px;
  }
`;
export const AboutH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const TitleName = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;

  @media (max-width: 560px) {
    margin: 20px 0px;
  }
`;

export const Languages = styled.div`
  font-weight: 700;
  writing-mode: vertical-lr;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Ru = styled.span`
  color: #828282;
  font-weight: bold;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 110px;
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Image1 = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
  }
`;

export const AboutMe = styled.div`
  background-color: #f6f6f6;
  text-align: center;
  padding: 120px 0px;
`;
export const AboutT = styled.h1`
  font-weight: 800;
  letter-spacing: 1.5px;
  font-size: 42px;
`;

export const Description = styled.div`
  margin: 40px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const Working = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px;
  gap: 60px;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Skill = styled.h1`
  font-weight: 800;
  letter-spacing: 1.5px;
  font-size: 42px;
`;

export const SkillDesc = styled.div`
  font-weight: 500;
`;
export const AdFoto = styled.div`
  background: radial-gradient(
    75.99% 75.64% at 32.94% 22.44%,
    rgba(52, 54, 78, 0.98) 0%,
    #0c0824 100%
  );
  max-width: 90px;
`;

export const AdIl = styled.div`
  background: radial-gradient(
    76% 75.63% at 32.97% 22.44%,
    rgba(66, 51, 37, 0.98) 0%,
    #1c0a00 100%
  );
  max-width: 90px;
`;

export const AdE = styled.div`
  background: radial-gradient(
    76% 75.63% at 32.97% 22.42%,
    rgba(68, 47, 85, 0.98) 0%,
    #12002c 100%
  );

  max-width: 90px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 140px;
  color: #828282;
  @media (max-width: 1000px) {
    display: block;
    text-align: center;
  }
`;

export const BlockItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: max-content;
  @media (max-width: 1000px) {
    margin-bottom: 30px;
    gap: 5px;
  }
`;
export const BlockItemText = styled.div`
  font-weight: 700;
  text-align: center;
`;

export const Portfolio1 = styled.div`
  text-align: center;
  background-color: #f6f6f6;
`;
export const Media = styled.div`
  margin-bottom: 20px;
`;

export const MediaImg = styled.img`
  max-width: 100%;
`;
export const H1 = styled.h1`
  margin-top: 80px;
  margin-bottom: 50px;
`;

export const PortfolioText = styled.div`
  margin-top: 30px;
  margin-bottom: 80px;
  text-decoration: underline;
`;

export const ContactsText = styled.div`
  text-align: center;
  margin: 100px 0px;
`;

export const ContactsTitle = styled.h1`
  margin-bottom: 20px;
`;

export const ContactsDescription = styled.div`
  margin-bottom: 25px;
`;

export const ContactsButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 20px;
  padding: 8px 17px;
  border: none;
  margin-top: 8px;
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin: 50px 0px;
`;

export const Menu = styled.div`
  position: relative;
  width: 30px;
  height: 20px;
  left: 340px;
  bottom: 154px;

  @media (min-width: 550px) {
    display: none;
  }
  @media (max-width: 420px) {
    position: relative;
    width: 30px;
    height: 20px;
    left: 265px;
    bottom: 154px;
  }
`;
export const MenuBurger = styled.div`
  ::before {
    content: "";
    background-color: black;
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
  }
  ::after {
    content: "";
    background-color: black;
    position: absolute;
    width: 100%;
    height: 3px;
    top: 20px;
  }

  span {
    content: "";
    background-color: black;
    position: absolute;
    width: 100%;
    height: 3px;
    top: 10px;
  }
`;
