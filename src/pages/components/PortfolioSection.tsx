import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { colors } from "@/styles/globals";
import { Space } from "antd";
import catSite from "./icons/catsite.png";
import { StyledSection } from "../../common.styled";

interface PortfolioProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const PortfolioContainer = styled.div`
  display: flex;
  background: white;
  text-align: center;
  align-items: center;
  padding: 26px;
  justify-content: center;
  width: fit-content;
`;

const PortfolioTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
`;
const PortfolioDescription = styled.p`
  font-size: 16px;
  color: ${colors.grey[3]};
`;

function Portfolio({ image, title, description }: PortfolioProps) {
  return (
    <PortfolioContainer>
      <Space>
        <Image src={image} alt="portfolio-img" width="300" height="300" />
        <div>
          <PortfolioTitle>{title}</PortfolioTitle>
          <PortfolioDescription>{description}</PortfolioDescription>
        </div>
      </Space>
    </PortfolioContainer>
  );
}

const MyWork = styled.h1`
  color: ${colors.accentGreen[2]};
  text-align: center;
  margin-bottom: 64px;
  font-size: 20px;
`;

const StyledPortfolioSection = styled(StyledSection)`
  border-bottom: 1px solid ${colors.grey[7]};
  align-items: center;
`;

function PortfolioSection() {
  return (
    <StyledPortfolioSection>
      <MyWork>PORTFOLIO</MyWork>
      <div>
        <Portfolio
          image={catSite}
          title="Catsite"
          description="Catsite allows you to rent cats, talk about cats, buy cats, all things cats."
        />
      </div>
    </StyledPortfolioSection>
  );
}

export default PortfolioSection;
