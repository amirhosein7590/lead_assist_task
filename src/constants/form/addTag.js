const inputs = [
  {
    type: "select",
    name: "disposition",
    rules: {
      required: "please select a disposition",
      validate: (value) => {
        const ALLOW_DISPOSITIONS = ["Converted", "Lost", "In Progress"];
        return ALLOW_DISPOSITIONS.includes(value) || "Disposition is Incorrect";
      },
    },
    options: [
      { label: "Converted", value: "Converted" },
      { label: "Lost", value: "Lost" },
      { label: "In Progress", value: "In Progress" },
    ],
    className: "w-10/12",
  },
  {
    type: "text",
    name: "title",
    className: "",
    rules: {
      required: "Please Insert Tag Title",
    },
    placeholder: "Tag Title", 
  },
];

export default inputs;
