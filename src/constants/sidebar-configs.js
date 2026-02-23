const MANAGEMENT = [
  {
    text: "Dashboard",
    icon: "MdOutlineSpaceDashboard",
  },
  {
    text: "Practice Management",
    icon: "PiHandbagLight",
  },
  {
    text: "Practice Growth",
    icon: "PiChartLineUpLight",
    children: [
      {
        text: "Lead Assist",
        icon: "IoPeople",
        children: [
          {
            text: "Dashboard",
            listStyle: true,
          },
          {
            text: "Leads Management",
            listStyle: true,
            children: [
              { text: "Leads" },
              { text: "Tags" },
              { text: "Lead Source" },
              { text: "Lead Source" },
            ],
          },
        ],
      },
    ],
  },

  {
    text: "Team Management",
    listStyle: true,
    children: [],
  },
  {
    text: "Tools",
    listStyle: true,
    children: [],
  },
  {
    text: "Staff Management",
    icon: "BsPeopleFill",
    children: [],
  },
  {
    text: "Communications",
    listStyle: true,
    children: [],
  },
];

const TOOLS = [
  {
    text: "Building",
    icon: "PiNewspaperClippingThin",
    children: [],
  },
  {
    text: "Support",
    icon: "BiSupport",
    children: [],
  },
  {
    text: "Settings",
    icon: "IoSettingsOutline",
    children: [],
  },
];

export { MANAGEMENT, TOOLS };
