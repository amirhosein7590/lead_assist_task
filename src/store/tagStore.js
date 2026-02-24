import { create } from "zustand";

const useTagStore = create((set, get) => ({
  tags: [
    {
      id: "84827977-1fe5-41c3-98a9-e94eab397d60",
      value: "New Lead",
      disposition: "Converted",
    },
    {
      id: "9a4b2c8d-3e5f-4a6b-8c7d-9e0f1a2b3c4d",
      value: "Google Ads",
      disposition: "Lost",
    },
    {
      id: "7f8e6d5c-4b3a-2c1d-9e8f-7a6b5c4d3e2f",
      value: "Facebook Campaign",
      disposition: "In Progress",
    },
    {
      id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      value: "Instagram",
      disposition: "Converted",
    },
    {
      id: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
      value: "LinkedIn",
      disposition: "Lost",
    },
    {
      id: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
      value: "Twitter/X",
      disposition: "In Progress",
    },
    {
      id: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
      value: "Website",
      disposition: "Converted",
    },
    {
      id: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
      value: "Email Campaign",
      disposition: "Lost",
    },
    {
      id: "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c",
      value: "SMS Marketing",
      disposition: "In Progress",
    },
    {
      id: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
      value: "Partner Referral",
      disposition: "Converted",
    },
  ],
  createTag: (disposition, value) =>
    set((state) => ({
      tags: [
        ...state.tags,
        { id: Math.floor(Math.random() * 99999), disposition, value },
      ],
    })),

  removeTag: (id) =>
    set((state) => ({
      tags: state.tags.filter((tag) => tag.id != id),
    })),
  selectedTag: "Converted",
  selectTag: (value) =>
    set((state) => ({
      selectedTag: value,
    })),

  getFilteredTags: () => {
    const state = get();
    return state.tags.filter((tag) => tag.disposition == state.selectedTag);
  },
}));

export default useTagStore;
