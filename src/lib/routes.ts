export const dashboardRoutes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    permissions: ["apps.common"],
    icon: "ic:round-dashboard",
  },
  {
    label: "Users",
    href: "/dashboard/users",
    permissions: ["users.manage"],
    icon: "ic:round-people-alt",
    children: [
      {
        label: "Manage Users",
        href: "/dashboard/users",
        permissions: ["users.manage"],
      },
      {
        label: "Manage Permissions",
        href: "/dashboard/users/permissions",
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
    icon: "ic:round-shopping-bag",
    children: [
      {
        label: "Create Submission",
        href: "/dashboard/submissions/create",
        permissions: ["submission.input"],
      },
      {
        label: "Submission Monitor",
        href: "/dashboard/submissions",
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
