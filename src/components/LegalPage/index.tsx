import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../../common/Container";

const PageWrapper = styled.div`
  padding: 80px 0 60px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #18216d;
  font-size: 14px;
  margin-bottom: 32px;
  transition: color 0.2s ease;

  &:hover {
    color: rgb(255, 130, 92);
  }

  &::before {
    content: "←";
    margin-right: 6px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #18216d;
  margin-bottom: 8px;
`;

const LastUpdated = styled.p`
  font-size: 13px;
  color: #888;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin-bottom: 36px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #18216d;
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid #f1f2f3;
`;

const Body = styled.div`
  font-size: 15px;
  line-height: 1.8;
  color: #4a4a4a;

  p {
    margin-bottom: 12px;
  }

  ul {
    margin: 8px 0 12px 20px;
    padding-left: 4px;
  }

  li {
    margin-bottom: 6px;
    color: #4a4a4a;
  }

  a {
    color: #18216d;
    text-decoration: underline;
    &:hover {
      color: rgb(255, 130, 92);
    }
  }

  strong {
    color: #18216d;
  }
`;

interface LegalSection {
  heading: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LegalPage = ({ title, lastUpdated, sections }: LegalPageProps) => {
  return (
    <Container>
      <PageWrapper>
        <BackLink to="/">Back to Home</BackLink>
        <Title>{title}</Title>
        <LastUpdated>Last updated: {lastUpdated}</LastUpdated>
        {sections.map((section, i) => (
          <Section key={i}>
            <SectionTitle>{section.heading}</SectionTitle>
            <Body>{section.content}</Body>
          </Section>
        ))}
      </PageWrapper>
    </Container>
  );
};

export default LegalPage;
