import Image from "next/image";
import styled from "styled-components";
import { colors } from "@/styles/globals";
import glints from "./icons/glints.svg";
import rocket from "./icons/rocket.svg";
import govtech from "./icons/govtech.svg";
import { StyledSection } from "../../common.styled";

const Line = styled.div`
  width: 100%;
  height: 2px;
  color: #777777;
`;

const StyledCompaniesSection = styled(StyledSection)`
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid ${colors.grey[7]};
`;

const ImProudToHaveCollaboratedWithSomeAwesomeCompanies = styled.h1`
  color: ${colors.grey[4]};
  font-weight: 500;
`;

function CompaniesSection() {
  return (
    <StyledCompaniesSection>
      <ImProudToHaveCollaboratedWithSomeAwesomeCompanies>
        I&apos;m proud to have collaborated with some awesome companies
      </ImProudToHaveCollaboratedWithSomeAwesomeCompanies>
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
