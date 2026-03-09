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
];

export default routes;
