import React, { useEffect, useRef } from "react";
import Select from "@/components/modules/select";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../input";
import { toast } from "sonner";
import { Button } from "@/components/modules/button";

function Form({
  inputs,
  mode = "onSubmit",
  submitFn,
  buttonClassName,
  buttonText,
  inputsWrapperClassName,
  closeModalFn,
}) {
  const defaultValues = inputs?.reduce((acc, input) => {
    if (input.defaultValue) {
      acc[input.name] = input.defaultValue;
    }
    return acc;
  }, {});

  const {
    formState: { errors, submitCount },
    control,
    handleSubmit,
    getValues,
  } = useForm({
    mode: mode,
    reValidateMode: mode,
    defaultValues,
  });

  const buttonRef = useRef(null);

  const inputGenerator = (field, input) => {
    const selectOnChange = (value) => {
      field.onChange(value);
      if (mode === "onChange") {
        if (buttonRef.current) {
          buttonRef.current.click();
        }
      }
    };

    switch (input.type) {
      case "select": {
        return (
          <Select
            name={input?.name}
            value={field.value}
            onChange={selectOnChange}
            options={input.options}
            className={input?.className}
          />
        );
      }
      default: {
        return (
          <Input
            name={input?.name}
            value={field.value || ""}
            onChange={field.onChange}
            placeholder={input.placeholder}
            className={input?.className}
          />
        );
      }
    }
  };

  const submit = (result) => {
    submitFn(result);
    closeModalFn?.();
  };

  useEffect(() => {
    const errorMessage = Object.values(errors)[0]?.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errors, submitCount]);

  return (
    <form className="w-full" onSubmit={handleSubmit(submit)}>
      <div className={`inputs-wrapper ${inputsWrapperClassName}`}>
        {inputs?.map((input) => (
          <Controller
            name={input?.name}
            key={input?.name}
            control={control}
            rules={input.rules}
            render={({ field }) => inputGenerator(field, input)}
          />
        ))}
      </div>
      <Button
        ref={buttonRef}
        size="sm"
        type="submit"
        className={`${mode === "onChange" ? "hidden" : "flex"} ${buttonClassName}`}
      >
        {buttonText}
      </Button>
    </form>
  );
}

export default React.memo(Form);
