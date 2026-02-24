import { create } from "zustand";

const useInformationStore = create((set, get) => ({
  properties: [
    { key: "First name", value: "Tiffany" },
    { key: "Last name", value: "May" },
    { key: "E-mail", value: "johnsmith@abc.com" },
    { key: "Lead Source", value: "Mobile App" },
    { key: "Agent", value: "Layvion Simon" },
    { key: "Time Zone", value: "(GMT) LosAngles" },
  ],
  addProperty: (key, value) =>
    set((state) => ({
      properties: [...state.properties, { key, value }],
    })),

  editPropperties: (updatedData) =>
    set((state) => ({
      properties: state.properties.map((prop) => ({
        ...prop,
        value:
          updatedData[prop.key] != undefined
            ? updatedData[prop.key]
            : prop.value,
      })),
    })),

}));

export default useInformationStore;
