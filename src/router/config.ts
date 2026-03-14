const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
    meta: {
      title: "MarkMePresent - Innovative Attendance Management System",
      description: "MarkMePresent — attendance management with geographical verification.",
      canonical: "https://markmepresent.com/"
    }
  },
  {
    path: ["/team"],
    exact: true,
    component: "Team",
    meta: {
      title: "Our Team - MarkMePresent",
      description: "Meet the MarkMePresent team.",
      canonical: "https://markmepresent.com/team"
    }
  },
  {
    path: ["/terms"],
    exact: true,
    component: "TermsOfService",
    meta: {
      title: "Terms & Conditions - MarkMePresent",
      description: "Read the Terms of Service for MarkMePresent.",
      canonical: "https://markmepresent.com/terms"
    }
  },
  {
    path: ["/privacy"],
    exact: true,
    component: "PrivacyPolicy",
    meta: {
      title: "Privacy Policy - MarkMePresent",
      description: "Read the GDPR-compliant Privacy Policy for MarkMePresent.",
      canonical: "https://markmepresent.com/privacy"
    }
  },
  {
    path: ["/dispute-resolution"],
    exact: true,
    component: "DisputeResolution",
    meta: {
      title: "Dispute Resolution - MarkMePresent",
      description: "Dispute resolution information for MarkMePresent users.",
      canonical: "https://markmepresent.com/dispute-resolution"
    }
  },
];

export default routes;
