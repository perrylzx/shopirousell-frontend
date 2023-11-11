import styled from "styled-components";
import { StyledSection } from "../common.styled";

const AboutMeSectionContainer = styled(StyledSection)`
  background: white;
`;

function AboutMeSection() {
  return (
    <AboutMeSectionContainer>
      <h1>ABOUT ME</h1>
      <h2>A software engineer based in Singapore</h2>
      <h3>
        I&quot;m Perry, a passionate software engineer specializing in React and
        Express. I have a strong affinity for good design and clean, optimized
        code. With my expertise in React, I excel at building dynamic and
        responsive user interfaces. In addition, my proficiency in Express
        enables me to develop robust backend APIs. I strive to create visually
        appealing interfaces that seamlessly blend form and function
      </h3>
    </AboutMeSectionContainer>
  );
}

export default AboutMeSection;
