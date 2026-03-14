import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const LegalPage = lazy(() => import("../../components/LegalPage"));

const sections = [
  {
    heading: "1. Data Controller",
    content: (
      <>
        <p>
          The data controller responsible for your personal data is:
        </p>
        <p>
          <strong>Swupel e.U.</strong><br />
          Rupertusplatz 1, 1170 Vienna, Austria<br />
          FN 638278w, Handelsgericht Wien<br />
          Email: <a href="mailto:contact@markmepresent.net">contact@markmepresent.net</a>
        </p>
      </>
    ),
  },
  {
    heading: "2. What Data We Collect",
    content: (
      <>
        <p>We collect the following categories of personal data when you use MarkMePresent:</p>
        <ul>
          <li><strong>Account data:</strong> name, email address, organisation</li>
          <li><strong>Usage data:</strong> attendance records, timestamps, session information</li>
          <li><strong>Location data:</strong> geographic coordinates used for attendance verification (processed at the time of check-in only)</li>
          <li><strong>Technical data:</strong> IP address, browser type, device identifiers, log data</li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. Legal Basis for Processing",
    content: (
      <>
        <p>We process your personal data on the following legal bases under the GDPR:</p>
        <ul>
          <li><strong>Contract performance (Art. 6(1)(b) GDPR):</strong> to provide the Service you have signed up for</li>
          <li><strong>Legitimate interests (Art. 6(1)(f) GDPR):</strong> for security, fraud prevention, and service improvement</li>
          <li><strong>Legal obligation (Art. 6(1)(c) GDPR):</strong> to comply with applicable laws</li>
          <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> for any optional features or communications you opt into</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. How We Use Your Data",
    content: (
      <>
        <p>We use your personal data to:</p>
        <ul>
          <li>Provide and maintain the MarkMePresent Service</li>
          <li>Verify attendance using geographical data</li>
          <li>Send service-related communications and notifications</li>
          <li>Improve and personalise your experience</li>
          <li>Detect and prevent fraud or abuse</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Data Retention",
    content: (
      <p>
        We retain your personal data for as long as your account is active or as necessary to
        provide the Service. Attendance records are retained for the period required by your
        organisation's settings or applicable law. Upon account deletion, we will delete or
        anonymise your personal data within 90 days, except where we are required to retain it by
        law.
      </p>
    ),
  },
  {
    heading: "6. Data Sharing",
    content: (
      <>
        <p>We do not sell your personal data. We may share your data with:</p>
        <ul>
          <li><strong>Service providers:</strong> trusted third parties who help us operate the Service (e.g. cloud infrastructure, email delivery), bound by data processing agreements</li>
          <li><strong>Your organisation:</strong> attendance records are accessible to authorised administrators within your organisation</li>
          <li><strong>Legal authorities:</strong> where required by law or to protect our rights</li>
        </ul>
        <p>
          Any transfers of personal data outside the European Economic Area (EEA) are made using
          appropriate safeguards, such as standard contractual clauses approved by the European
          Commission.
        </p>
      </>
    ),
  },
  {
    heading: "7. Your Rights Under GDPR",
    content: (
      <>
        <p>As a data subject under the GDPR, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
          <li><strong>Rectification:</strong> correct inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> request deletion of your personal data ("right to be forgotten")</li>
          <li><strong>Restriction:</strong> request that we limit how we process your data</li>
          <li><strong>Portability:</strong> receive your data in a structured, machine-readable format</li>
          <li><strong>Objection:</strong> object to processing based on legitimate interests</li>
          <li><strong>Withdraw consent:</strong> at any time, where processing is based on consent</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:contact@markmepresent.net">contact@markmepresent.net</a>. We will respond
          within 30 days. You also have the right to lodge a complaint with the Austrian Data
          Protection Authority (Datenschutzbehörde) at{" "}
          <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>.
        </p>
      </>
    ),
  },

  {
    heading: "8. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you of significant
        changes by email or by a prominent notice on our website. The "Last updated" date at the
        top of this policy reflects the most recent revision.
      </p>
    ),
  },
  {
    heading: "9. Contact",
    content: (
      <p>
        For any questions about this Privacy Policy or how we handle your data, please contact us
        at <a href="mailto:contact@markmepresent.net">contact@markmepresent.net</a>.
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - MarkMePresent</title>
        <meta name="description" content="Read the GDPR-compliant Privacy Policy for MarkMePresent, operated by Swupel e.U." />
      </Helmet>
      <ScrollToTop />
      <LegalPage
        title="Privacy Policy"
        lastUpdated="March 14, 2026"
        sections={sections}
      />
    </>
  );
};

export default PrivacyPolicy;
