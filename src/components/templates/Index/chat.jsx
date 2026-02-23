import ContactInfo from "@/components/modules/contactInfo";
import React, { memo } from "react";

function Chat() {
  return (
    <div className="w-full lg:w-8/12 flex flex-col lg:border-r">
      <ContactInfo fullName="Tiffany May" phone="+971(825)1256" />
    </div>
  );
}

export default memo(Chat);
