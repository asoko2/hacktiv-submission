type UsersPermission = {
  id: string;
  name: string;
  groups: string[];
};

export const usersPermission: UsersPermission[] = [
  {
    id: "728ed52f",
    name: "HRD",
    groups: ["hrd", "pegawai"],
  },
  {
    id: "f01jflkajf",
    name: "Atasan",
    groups: ["atasan", "pegawai"],
  },
  {
    id: "af1flkajf",
    name: "Pengesah",
    groups: ["pengesah", "pegawai"],
  },
  {
    id: "9029afklsj",
    name: "Pegawai",
    groups: ["pegawai"],
  },
  {
    id: "1a2b3c4d",
    name: "Manager",
    groups: ["atasan", "hrd"],
  },
  {
    id: "5e6f7g8h",
    name: "Supervisor",
    groups: ["atasan", "pengesah"],
  },
  {
    id: "9i0j1k2l",
    name: "Staff",
    groups: ["pegawai"],
  },
  {
    id: "3m4n5o6p",
    name: "Recruiter",
    groups: ["hrd"],
  },
  {
    id: "7q8r9s0t",
    name: "Approver",
    groups: ["pengesah"],
  },
  {
    id: "1u2v3w4x",
    name: "Employee",
    groups: ["pegawai"],
  },
  {
    id: "5y6z7a8b",
    name: "Director",
    groups: ["atasan", "hrd", "pengesah"],
  },
  {
    id: "9c0d1e2f",
    name: "Coordinator",
    groups: ["atasan", "pegawai"],
  },
  {
    id: "3g4h5i6j",
    name: "Administrator",
    groups: ["hrd", "pengesah"],
  },
  {
    id: "7k8l9m0n",
    name: "Assistant",
    groups: ["pegawai"],
  },
];
