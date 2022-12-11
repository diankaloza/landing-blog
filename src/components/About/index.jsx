import { AboutMe, Description, AboutT } from "../styles/styles";

export const About = () => {
  return (
    <AboutMe>
      <AboutT>About me</AboutT>
      <div>
        <Description>
          Hi, I'm Denis - UX/UI designer from Minsk. <br /> I'm interested in
          design and everything connected with it.{" "}
        </Description>
        <Description>
          I'm studying at courses "Web and mobile design <br /> interfaces" in
          IT-Academy.
        </Description>
        <Description>
          {" "}
          Ready to implement excellent projects <br /> with wonderful people.{" "}
        </Description>
      </div>
    </AboutMe>
  );
};
