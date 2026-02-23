"use client";

import { CiCircleCheck } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiWarning } from "react-icons/ci";
import { VscError } from "react-icons/vsc";
import { RiLoader2Fill } from "react-icons/ri";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CiCircleCheck className="size-4" />,
        info: <IoIosInformationCircleOutline className="size-4" />,
        warning: <CiWarning className="size-4" />,
        error: <VscError className="size-4" />,
        loading: <RiLoader2Fill className="size-4 animate-spin" />,
      }}
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)",
      }}
      {...props}
    />
  );
};

export { Toaster };
