export const dashboardRoutes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    permissions: ["apps.common"],
    groups: ["atasan", "hrd", "pengesah", "pegawai"],
    icon: "ic:round-dashboard",
  },
  {
    label: "Users",
    href: "/dashboard/users",
    permissions: ["users.manage"],
    icon: "ic:round-people-alt",
    groups: ["hrd"],
    children: [
      {
        label: "Manage Users",
        href: "/dashboard/users",
        groups: ["hrd"],
        permissions: ["users.manage"],
      },
      {
        label: "Manage Permissions",
        href: "/dashboard/users/permissions",
        groups: ["hrd"],
        permissions: ["users.manage"],
      },
    ],
  },
  {
    label: "Submissions",
    href: "/dashboard/submissions",
    permissions: [
      "submission.input",
      "submission.first-approval",
      "submission.second-approval",
      "submission.authenticator-approval",
      "submission.need-revision",
      "submission.reject",
    ],
    groups: ["atasan", "hrd", "pengesah", "pegawai"],
    icon: "ic:round-shopping-bag",
    children: [
      {
        label: "Create Submission",
        href: "/dashboard/submissions/create",
        permissions: ["submission.input"],
        groups: ["atasan", "hrd", "pengesah", "pegawai"],
      },
      {
        label: "Submission Monitor",
        href: "/dashboard/submissions",
        groups: ["atasan", "hrd", "pengesah", "pegawai"],
        permissions: [
          "submission.first-approval",
          "submission.second-approval",
          "submission.authenticator-approval",
          "submission.need-revision",
          "submission.reject",
        ],
      },
    ],
  },
];
