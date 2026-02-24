"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { Button } from "@/components/modules/button";
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/modules/popover";

const Select = memo(
  ({
    options = [],
    value = "",
    title,
    onChange = () => {},
    className,
    placeholder,
  }) => {
    const [open, setOpen] = useState(false);

    const toggleOption = (value) => {
      onChange(value);
      setOpen(false);
    };

    const clearSelectedOptions = () => {
      onChange("");
      setOpen(false);
    };

    const getSelectedLabel = () => {
      if (!options || value?.length < 1) return placeholder || "Please Select";
      const label = options.find((o) => o.value == value)?.label;
      return label;
    };

    return (
      <>
        <div className={`w-full lg:w-64 overflow-auto max-h-50`}>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTitle>{title}</PopoverTitle>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex justify-between !rounded-[5px]"
              >
                {getSelectedLabel()}
                <IoChevronDown className="opacity-50 w-4 h-4" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-64 p-0 max-h-82.5">
              {Array.isArray(options) &&
                options.map((item) => (
                  <li
                    key={item.value}
                    className=" flex list-none py-2 hover:bg-gray-100 cursor-pointer flex-row-reverse justify-between px-3.5 rounded-none"
                    onClick={() => toggleOption(item.value)}
                  >
                    <FaCheck
                      className={cn(
                        "mr-2 h-4 w-4",
                        value == item.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {item.label}
                  </li>
                ))}
              <Button
                onClick={clearSelectedOptions}
                variant="ghost"
                size="sm"
                className="text-(--base-gray)"
              >
                Clear
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </>
    );
  },
);

export default Select;
