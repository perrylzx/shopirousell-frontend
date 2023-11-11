import { Button, Space } from "antd";
import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/globals";
import GithubIcon from "./icons/github.svg";
import LinkedInIcon from "./icons/linkedin.png";
import ExpressIcon from "./icons/express.svg";
import JestIcon from "./icons/jest.svg";
import JsIcon from "./icons/js.svg";
import PythonIcon from "./icons/python.svg";
import PSQLIcon from "./icons/psql.svg";
import SequelizeIcon from "./icons/sequelize.svg";
import NodeIcon from "./icons/node.svg";
import ReactIcon from "./icons/react.svg";
import DjangoIcon from "./icons/django.svg";
import TSIcon from "./icons/typescript.svg";
import { StyledSection } from "../../common.styled";

const IDesignAndCodeWithButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;

const FullStackSoftwareEngineer = styled.h1`
  margin-bottom: 12px;
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  color: #1f2832;
`;

const IDesignAndCode = styled.h1`
  color: ${colors.grey[4]};
  font-weight: 300;
  margin-right: 8px;
`;

const TechStackIcons = styled(Image).attrs({
  width: 60,
  height: 60,
})``;

const TechStackContainer = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const StyledHeaderSection = styled(StyledSection)`
  width: fit-content;
  align-items: flex-start;
`;

function HeaderSection() {
  return (
    <StyledHeaderSection>
      <div style={{ marginBottom: "12px" }}>
        <Button type="primary">Say Hello</Button>
      </div>
      <FullStackSoftwareEngineer>
        Full-Stack <br /> Software Engineer
      </FullStackSoftwareEngineer>
      <IDesignAndCodeWithButtonsContainer>
        <IDesignAndCode>I design and code full-stack web apps</IDesignAndCode>
        <Space>
          <a target="_blank" href="https://github.com/perrylzx">
            <Image
              alt="github-button"
              width="30"
              height="30"
              src={GithubIcon}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/perry-lim-192841232"
          >
            <Image
              alt="github-button"
              width="30"
              height="30"
              src={LinkedInIcon}
            />
          </a>
        </Space>
      </IDesignAndCodeWithButtonsContainer>
      <TechStackContainer>
        <Space>
          <TechStackIcons alt="github-button" src={ExpressIcon} />
          <TechStackIcons alt="github-button" src={JestIcon} />
          <TechStackIcons alt="github-button" src={JsIcon} />
          <TechStackIcons alt="github-button" src={NodeIcon} />
          <TechStackIcons alt="github-button" src={DjangoIcon} />
        </Space>
        <br />
        <Space>
          <TechStackIcons alt="github-button" src={PythonIcon} />
          <TechStackIcons alt="github-button" src={PSQLIcon} />
          <TechStackIcons alt="github-button" src={SequelizeIcon} />
          <TechStackIcons alt="github-button" src={ReactIcon} />
          <TechStackIcons alt="github-button" src={TSIcon} />
        </Space>
      </TechStackContainer>
    </StyledHeaderSection>
  );
}

export default HeaderSection;
