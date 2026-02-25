import { Button } from "@/components/modules/button";
import UserAvatar from "@/components/modules/userAvatar";
import React, { memo } from "react";

function Notes() {
  return (
    <div className="flex flex-col gap-y-3 pb-10">
      <div className="header flex justify-between mt-6 mb-4 px-4 items-center bg-gray-100 py-4">
        <span className="text-sm text-gray-600">Information</span>
      </div>

      <div className="avatar-wrapper pl-4 flex items-center gap-x-2">
        <UserAvatar avatarSrc="/icons/avatar.svg" />
        <div className="flex flex-col gap-y-2">
          <span className="text-(--base-gray) text-sm">Jayvion Simon</span>
          <span className="text-xs text-gray-300">Today 16:23</span>
        </div>
      </div>

      <div className="contact-info pl-4 mt-4">
        <p className="text-sm mb-1">Contact Tiffany May 27 May</p>
        <Button size="sm" variant="link" className="p-0 text-(--dark-blue)">
          @Customer_Exprience
        </Button>
      </div>
    </div>
  );
}

export default memo(Notes);
