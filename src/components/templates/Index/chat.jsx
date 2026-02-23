import Call from "@/components/modules/call";
import Message from "@/components/modules/message";
import ContactInfo from "@/components/templates/Index/contactInfo";
import React, { memo } from "react";

function Chat() {
  return (
    <div className="w-full lg:w-8/12 flex flex-col lg:border-r">
      <ContactInfo fullName="Tiffany May" phone="+971(825)1256" />
      <div className="chat-list p-4 mt-5 gap-y-4">
        <Message
          userFullName="Tiffany May"
          date={new Date()}
          text="Hey John, I am looking for the best admin template, Could you please help me to find it out ? 🤔"
        />
        <Call
          avatarSrc="/icons/avatar.svg"
          date={new Date()}
          timeLeft="0:25"
        />
      </div>
    </div>
  );
}

export default memo(Chat);
