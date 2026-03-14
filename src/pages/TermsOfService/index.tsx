import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const LegalPage = lazy(() => import("../../components/LegalPage"));

const sections = [
  {
    heading: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing or using the MarkMePresent platform ("Service"), you agree to be bound by these
        Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the
        Service. These Terms constitute a legally binding agreement between you and Swupel e.U.
        ("Company", "we", "us", or "our"), registered at Rupertusplatz 1, 1170 Vienna, Austria
        (FN 638278w, Handelsgericht Wien).
      </p>
    ),
  },
  {
    heading: "2. Description of Service",
    content: (
      <>
        <p>
          MarkMePresent is an attendance management platform that provides geographical verification
          of attendance for organisations, educational institutions, and businesses. The Service
          includes web-based tools, APIs, and related features offered by Swupel e.U.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of the Service at any
          time with reasonable notice.
        </p>
      </>
    ),
  },
  {
    heading: "3. User Accounts",
    content: (
      <>
        <p>
          To use the Service, you must register for an account. You agree to:
        </p>
        <ul>
          <li>Provide accurate and complete registration information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Accept responsibility for all activities that occur under your account</li>
          <li>Notify us immediately of any unauthorised use of your account</li>
        </ul>
        <p>
          We reserve the right to suspend or terminate accounts that violate these Terms.
        </p>
      </>
    ),
  },
  {
    heading: "4. Acceptable Use",
    content: (
      <>
        <p>You agree not to use the Service to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Submit false or misleading attendance data</li>
          <li>Interfere with the operation of the Service or its infrastructure</li>
          <li>Attempt to gain unauthorised access to any part of the Service</li>
          <li>Transmit harmful, offensive, or unlawful content</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the Service</li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Intellectual Property",
    content: (
      <p>
        All intellectual property rights in the Service, including software, design, logos, and
        content, are owned by Swupel e.U. or its licensors. You are granted a limited,
        non-exclusive, non-transferable licence to use the Service solely as permitted by these
        Terms. Nothing in these Terms transfers any intellectual property rights to you.
      </p>
    ),
  },
  {
    heading: "6. Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, Swupel e.U. shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages, including but not
          limited to loss of profits, data, or goodwill, arising from your use of or inability to
          use the Service.
        </p>
        <p>
          Our total liability to you for any claim arising under these Terms shall not exceed the
          amounts paid by you to us in the twelve (12) months preceding the claim.
        </p>
      </>
    ),
  },
  {
    heading: "7. Governing Law",
    content: (
      <p>
        These Terms are governed by and construed in accordance with the laws of Austria. Any
        disputes arising from these Terms shall be subject to the exclusive jurisdiction of the
        courts of Vienna, Austria, unless mandatory consumer protection laws in your country require
        otherwise.
      </p>
    ),
  },
  {
    heading: "8. Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. We will notify you of material changes by
        posting the updated Terms on this page and updating the "Last updated" date. Your continued
        use of the Service after such changes constitutes your acceptance of the revised Terms.
      </p>
    ),
  },
  {
    heading: "9. Contact",
    content: (
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:contact@markmepresent.net">contact@markmepresent.net</a>.
      </p>
    ),
  },
];

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - MarkMePresent</title>
        <meta name="description" content="Read the Terms of Service for MarkMePresent, operated by Swupel e.U." />
      </Helmet>
      <ScrollToTop />
      <LegalPage
        title="Terms & Conditions"
        lastUpdated="March 14, 2026"
        sections={sections}
      />
    </>
  );
};

export default TermsOfService;
