import { Button, Space } from "antd";
import styled from "styled-components";
import Image from "next/image";
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
import { StyledSection } from "../common.styled";

const IDesignAndCodeWithButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 64px;
`;

const FullStackSoftwareEngineer = styled.h1`
  margin-bottom: 8px;
  font-size: 32px;
  line-height: 42px;
  font-weight: 600;
  color: #1f2832;
`;

const IDesignAndCode = styled.h1`
  color: #1f2832;
  font-weight: 300;
`;

function HeaderSection() {
  return (
    <StyledSection>
      <div>
        <Button>Say Hello</Button>
      </div>
      <FullStackSoftwareEngineer>
        Full-Stack <br /> Software Engineer
      </FullStackSoftwareEngineer>
      <IDesignAndCodeWithButtonsContainer>
        <IDesignAndCode>I design and code full-stack web apps</IDesignAndCode>
        <Space>
          <Image alt="github-button" width="30" height="30" src={GithubIcon} />
          <Image
            alt="github-button"
            width="30"
            height="30"
            src={LinkedInIcon}
          />
        </Space>
      </IDesignAndCodeWithButtonsContainer>
      <div>
        <h1>Tech Stack</h1>
        <div>
          <Image alt="github-button" width="30" height="30" src={ExpressIcon} />
          <Image alt="github-button" width="30" height="30" src={JestIcon} />
          <Image alt="github-button" width="30" height="30" src={JsIcon} />
          <Image alt="github-button" width="30" height="30" src={NodeIcon} />
          <Image alt="github-button" width="30" height="30" src={PythonIcon} />
          <Image alt="github-button" width="30" height="30" src={PSQLIcon} />
          <Image
            alt="github-button"
            width="30"
            height="30"
            src={SequelizeIcon}
          />
          <Image alt="github-button" width="30" height="30" src={ReactIcon} />
        </div>
      </div>
    </StyledSection>
  );
}

export default HeaderSection;
