import styled from "styled-components";
import { colors } from "@/styles/globals";
import { StyledSection } from "../../common.styled";

const AboutMeSectionContainer = styled(StyledSection)`
  background: white;
`;

const AboutMe = styled.h1`
  color: ${colors.accentGreen[2]};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const ASoftwareEngineerBasedInSingapore = styled.h2`
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: ${colors.grey[3]};
  line-height: 22px;
  max-width: 488px;
`;

function AboutMeSection() {
  return (
    <AboutMeSectionContainer>
      <div>
        <AboutMe>ABOUT ME</AboutMe>
        <ASoftwareEngineerBasedInSingapore>
          A software engineer based in Singapore
        </ASoftwareEngineerBasedInSingapore>
        <Description>
          I&apos;m Perry, a passionate software engineer specializing in React
          and NodeJS. I have a strong affinity for good design and clean,
          optimized code. With my expertise in React, I excel at building
          dynamic and responsive user interfaces. In addition, my proficiency in
          Express enables me to develop robust backend APIs.
        </Description>
      </div>
    </AboutMeSectionContainer>
  );
}

export default AboutMeSection;
