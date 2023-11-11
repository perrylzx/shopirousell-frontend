import { Button } from "antd";
import styled from "styled-components";
import { colors } from "@/styles/globals";
import { StyledSection } from "../../common.styled";

const StyledFooterSection = styled(StyledSection)`
  justify-content: center;
  text-align: center;
`;

const InterestedInCollaboratingWithMe = styled.h1`
  color: ${colors.grey[4]};
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 32px;
`;

function FooterSection() {
  return (
    <StyledFooterSection>
      <InterestedInCollaboratingWithMe>
        Interested in collaborating with me?
      </InterestedInCollaboratingWithMe>
      <div>
        <Button type="primary">Send an email</Button>
      </div>
    </StyledFooterSection>
  );
}

export default FooterSection;
