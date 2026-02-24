import React, { useRef, useEffect, memo } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../input";
import Select from "@/components/modules/select";
import { Button } from "@/components/modules/button";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { toast } from "sonner";

function Form({ 
  inputs, 
  onSave, 
  onCancel,
  isEditing,
  setIsEditing,
  initialValues = {},
  className = "" 
}) {
  const wrapperRef = useRef(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, submitCount },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleCancel();
      }
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  useEffect(() => {
    const errorMessage = Object.values(errors)[0]?.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errors, submitCount]);

  const handleSave = (data) => {
    onSave?.(data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    reset(initialValues);
    onCancel?.();
  };

  const inputGenerator = (field, input) => {
    const commonProps = {
      name: input?.name,
      value: field?.value,
      onChange: field?.onChange,
      className: `${input?.className} p-1 border rounded w-full`,
      autoFocus: true,
    };

    switch (input.type) {
      case "select":
        return <Select {...commonProps} options={input.options} />;
      default:
        return <Input {...commonProps} placeholder={input.placeholder} />;
    }
  };

  if (!isEditing) {
    return (
      <div className={`p-2 ${className}`}>
        {inputs.map((input) => (
          <div key={input.name} className="flex items-center gap-2 py-1">
            <span className="text-gray-600 min-w-24">{input.placeholder}:</span>
            <span className="text-gray-900">
              {initialValues[input.name] || "—"}
            </span>
          </div>
        ))}
      </div>
    );
  }

    return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <form
        onSubmit={handleSubmit(handleSave)}
        className="flex flex-col gap-3"
      >
        {inputs.map((input) => (
          <div key={input.name} className="flex items-center gap-2">
            <span className="text-gray-600 min-w-24">{input.placeholder}:</span>
            <Controller
              name={input.name}
              control={control}
              rules={input.rules}
              render={({ field }) => inputGenerator(field, input)}
            />
          </div>
        ))}

        <div className="flex justify-end gap-2 mt-2">
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={handleCancel}
            className="text-gray-600 hover:text-gray-700"
          >
            <IoClose className="w-4 h-4" />
            <span className="ml-1">Cancel</span>
          </Button>
          <Button
            type="submit"
            size="sm"
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            <IoCheckmark className="w-4 h-4" />
            <span className="ml-1">Save</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default memo(Form);