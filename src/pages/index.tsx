import Head from "next/head";
import styled from "styled-components";
import HeaderSection from "./components/HeaderSection";
import AboutMeSection from "./components/AboutMeSection";
import PortfolioSection from "./components/PortfolioSection";
import CompaniesSection from "./components/CompaniesSection";
import FooterSection from "./components/FooterSection";

const StyledMain = styled.main`
  font-family: "Helvetica", "Arial", sans-serif;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Perry&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <HeaderSection />
        <AboutMeSection />
        <PortfolioSection />
        <CompaniesSection />
        <FooterSection />
      </StyledMain>
    </>
  );
}
