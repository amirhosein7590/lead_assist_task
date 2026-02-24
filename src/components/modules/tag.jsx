import React, { memo } from "react";
import { IoCloseSharp, IoAddOutline } from "react-icons/io5";
import { Button } from "./button";
import useTagStore from "@/store/tagStore";
import { useModal } from "@/contexts/ModalContext";
import inputs from "@/constants/form/addTag";
import Form from "./ّform";

const colors = [
  "bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100",
  "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100",
  "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100",
  "bg-red-50 text-red-700 border border-red-200 hover:bg-red-100",
  "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100",
  "bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100",
  "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100",
  "bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100",
  "bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100",
  "bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100",
];

function Tag({ value, className, id, mode = "delete" }) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const removeTag = useTagStore((s) => s.removeTag);
  const createTag = useTagStore((s) => s.createTag);
  const { showModal } = useModal();

  const createTagHandler = () => {
    showModal({
      header: () => <span>Add Tag</span>,
      content: ({ close }) => (
        <div className="form-wrapper">
          <Form
            mode="add"
            buttonText="Add Tag"
            buttonClassName=""
            inputs={inputs}
            submitFn={(result) => {
              const disposition = result.disposition;
              const title = result.title;
              createTag(disposition, title);
              close();
            }}
            inputsWrapperClassName="flex flex-col gap-y-2 mb-4 lg:flex-row lg:gap-x-2 lg:justify-between lg:items-center"
          />
        </div>
      ),
    });
  };

  return (
    <div
      className={`
        inline-flex items-center gap-1.5 
        px-2 py-0.5 
        rounded-sm
        text-sm font-medium
        transition-all duration-200
        shadow-sm
        ${mode == "delete" ? randomColor : "bg-gray-100 text-gray-600"}
        ${className || ""}
      `}
    >
      <span>{mode == "delete" ? value : "Add Tag"}</span>
      {mode == "delete" ? (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => removeTag(id)}
          className="
            w-4 h-4 p-0 
            rounded-full 
            hover:bg-black/10 
            transition-colors
            text-current
          "
        >
          <IoCloseSharp className="w-3.5 h-3.5" />
        </Button>
      ) : (
        <Button
          size="sm"
          variant="ghost"
          onClick={createTagHandler}
          className="
            w-4 h-4 p-0 
            rounded-full 
            hover:bg-black/10 
            transition-colors
            text-current
          "
        >
          <IoAddOutline />
        </Button>
      )}
    </div>
  );
}

export default memo(Tag);
