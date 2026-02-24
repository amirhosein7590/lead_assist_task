import React, { memo } from "react";
import { LuPhone } from "react-icons/lu";
import { Button } from "../../modules/button";
import { ContactSidebarTrigger } from "../../modules/sidebar/sidebarContact";
import { PiNoteThin } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import UserAvatar from "../../modules/userAvatar";

function ContactInfo({ fullName, phone }) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="info-wrapper flex gap-x-4 items-center">
        <UserAvatar fullName={fullName} />
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
