import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import catSite from "./icons/catsite.png";
import { StyledSection } from "../common.styled";

interface PortfolioProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const PortfolioContainer = styled.div`
  display: flex;
`;

function Portfolio({ image, title, description }: PortfolioProps) {
  return (
    <PortfolioContainer>
      <Image src={image} alt="portfolio-img" width="100" height="100" />
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </PortfolioContainer>
  );
}

function PortfolioSection() {
  return (
    <StyledSection>
      <h1>PORTFOLIO</h1>
      <div>
        <Portfolio
          image={catSite}
          title="Catsite"
          description="Catsite allows you to rent cats, talk about cats, buy cats, all things cats."
        />
        <Portfolio
          image={catSite}
          title="Catsite"
          description="Catsite allows you to rent cats, talk about cats, buy cats, all things cats."
        />
      </div>
    </StyledSection>
  );
}

export default PortfolioSection;
