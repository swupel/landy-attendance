import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const LegalPage = lazy(() => import("../../components/LegalPage"));

const sections = [
  {
    heading: "1. Our Commitment",
    content: (
      <p>
        Swupel e.U. is committed to resolving any concerns or disputes you may have regarding the
        MarkMePresent Service fairly and efficiently. We encourage you to contact us directly in
        the first instance so we can resolve your concern promptly.
      </p>
    ),
  },
  {
    heading: "2. Contact Us First",
    content: (
      <>
        <p>
          Before initiating any formal dispute resolution process, please contact us at:
        </p>
        <p>
          <strong>Swupel e.U.</strong><br />
          Rupertusplatz 1, 1170 Vienna, Austria<br />
          Email: <a href="mailto:contact@markmepresent.net">contact@markmepresent.net</a>
        </p>
        <p>
          We will make every effort to acknowledge your complaint within 5 business days and
          provide a substantive response within 30 days.
        </p>
      </>
    ),
  },
  {
    heading: "3. EU Online Dispute Resolution (ODR)",
    content: (
      <>
        <p>
          If you are a consumer resident in the European Union, you have the right to use the
          European Commission's Online Dispute Resolution (ODR) platform to resolve disputes
          relating to online services:
        </p>
        <p>
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
        <p>
          Our email address for ODR purposes is:{" "}
          <a href="mailto:contact@markmepresent.net">contact@markmepresent.net</a>
        </p>
      </>
    ),
  },
  {
    heading: "4. Alternative Dispute Resolution (ADR) in Austria",
    content: (
      <>
        <p>
          For consumers based in Austria, alternative dispute resolution is available through the
          Internet Ombudsman (Internet Ombudsmann), an accredited ADR body:
        </p>
        <p>
          <strong>Internet Ombudsmann</strong><br />
          <a href="https://www.ombudsmann.at" target="_blank" rel="noopener noreferrer">
            www.ombudsmann.at
          </a>
        </p>
        <p>
          Participation in ADR proceedings is voluntary for Swupel e.U. We will notify you in
          writing whether we are willing to participate in any specific ADR process.
        </p>
      </>
    ),
  },
  {
    heading: "5. Governing Law and Jurisdiction",
    content: (
      <p>
        Any disputes not resolved through the processes above shall be subject to the exclusive
        jurisdiction of the competent courts of Vienna, Austria, in accordance with Austrian law,
        unless mandatory consumer protection laws in your country of residence provide otherwise.
      </p>
    ),
  },
  {
    heading: "6. Data Protection Complaints",
    content: (
      <p>
        If your dispute relates to the processing of your personal data, you have the right to
        lodge a complaint directly with the Austrian Data Protection Authority (Datenschutzbehörde)
        at{" "}
        <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
          www.dsb.gv.at
        </a>
        , without prejudice to any other administrative or judicial remedy.
      </p>
    ),
  },
];

const DisputeResolution = () => {
  return (
    <>
      <Helmet>
        <title>Dispute Resolution - MarkMePresent</title>
        <meta name="description" content="Information on dispute resolution options for MarkMePresent users, including EU ODR and Austrian ADR." />
      </Helmet>
      <ScrollToTop />
      <LegalPage
        title="Dispute Resolution"
        lastUpdated="March 14, 2026"
        sections={sections}
      />
    </>
  );
};

export default DisputeResolution;
