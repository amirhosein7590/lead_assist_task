// components/modules/contactInfo.jsx
import React, { memo } from "react";
import { LuPhone } from "react-icons/lu";
import { Button } from "./button";
import { ContactSidebarTrigger } from "./sidebar/sidebarContact";
import { PiNoteThin } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";

function ContactInfo({ fullName, phone }) {
  const [firstName, lastName] = fullName.split(" ");
  const firstNameFormated = firstName?.slice(0, 1) || "";
  const lastNameFormated = lastName?.slice(0, 1) || "";

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="info-wrapper flex gap-x-2 items-center">
        <span className="rounded-full text-[16px] font-semibold w-10 h-10 lg:w-12 lg:h-12 bg-green-500 text-white flex items-center justify-center">
          {firstNameFormated}
          {lastNameFormated}
        </span>
        <div className="info flex flex-col gap-y-1">
          <p className="fullName font-bold text-sm lg:text-lg">{fullName}</p>
          <p className="phone text-sm text-(--base-gray)">{phone}</p>
        </div>
      </div>

      <div className="icon-tools flex items-center gap-x-3">
        <Button variant="icon">
          <LuPhone className="lg:!w-7 lg:!h-7" color="var(--base-gray)" />
        </Button>
        <Button variant="icon">
          <PiNoteThin className="lg:!w-8 lg:!h-8" color="var(--base-gray)" />
        </Button>
        <Button variant="icon">
          <CiMenuKebab className="lg:!w-8 lg:!h-8" color="var(--base-gray)" />
        </Button>
        <ContactSidebarTrigger className="md:hidden" />
      </div>
    </div>
  );
}

export default memo(ContactInfo);
