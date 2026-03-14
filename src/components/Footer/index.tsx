import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";

import {
  FooterSection,
  Para,
  Large,
  Chat,
  Empty,
  Language,
  NavLink,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={8} md={8} sm={12} xs={24}>
              <Empty />
              <Language>{t("CONTACT")}</Language>
              <a href="mailto:contact@markmepresent.net">
                <Chat>contact@markmepresent.net</Chat>
              </a>
              <Para style={{ fontSize: "12px", marginTop: "10px" }}>{t("A product of")}</Para>
              <a href="https://swupel.com" target="_blank" rel="noopener noreferrer">
                <Chat style={{ marginTop: "0" }}>swupel.com</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <Empty />
              <Language>{t("IMPRINT")}</Language>
              <Para>Swupel e.U.</Para>
              <Para>Rupertusplatz 1</Para>
              <Para>1170, Vienna, Austria</Para>
              <Para>FN: 638278w</Para>
              <Para>Handelsgericht Wien</Para>
              <Para>{t("Member of WKO Wien")}</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <Empty />
              <Language>{t("LEGAL")}</Language>
              <NavLink to="/terms">{t("Terms & Conditions")}</NavLink>
              <NavLink to="/privacy">{t("Privacy Policy")}</NavLink>
              <NavLink to="/dispute-resolution">{t("Dispute Resolution")}</NavLink>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
