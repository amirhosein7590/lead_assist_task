const inputs = [
  {
    type: "select",
    name: "disposition",
    rules: { required: "please select a disposition" },
    options: [
      { label: "Converted", value: "Converted" },
      { label: "Lost", value: "Lost" },
      { label: "In Progress", value: "In Progress" },
    ],
    defaultValue: "Converted",
    className: "w-10/12",
  },
];

export default inputs;
