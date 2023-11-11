import Image from "next/image";
import styled from "styled-components";
import glints from "./icons/glints.svg";
import rocket from "./icons/rocket.svg";
import govtech from "./icons/govtech.svg";
import { StyledSection } from "../common.styled";

const Line = styled.div`
  width: 100%;
  height: 2px;
  color: #777777;
`;

const StyledCompaniesSection = styled(StyledSection)`
  justify-content: center;
  text-align: center;
`;

function CompaniesSection() {
  return (
    <StyledCompaniesSection>
      <h1>I&apos;m proud to have collaborated with some awesome companies</h1>
      <div>
        <Image src={rocket} alt="rocket-img" width="100" height="100" />
        <Image src={glints} alt="glints-img" width="100" height="100" />
        <Image src={govtech} alt="govtech-img" width="100" height="100" />
      </div>
      <Line />
    </StyledCompaniesSection>
  );
}

export default CompaniesSection;
