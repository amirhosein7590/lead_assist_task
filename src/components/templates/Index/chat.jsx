"use client";

import Call from "@/components/modules/call";
import ChatInput from "@/components/modules/chatInput";
import Message from "@/components/modules/message";
import ContactInfo from "@/components/templates/Index/contactInfo";
import React, { memo } from "react";

function Chat() {
  return (
    <div className="w-full lg:w-8/12 flex h-full flex-col lg:border-r">
      <ContactInfo fullName="Tiffany May" phone="+971(825)1256" />
      <div className="chat-list  pt-4 px-4 mt-5 flex-1 grid grid-rows-[1fr_auto] gap-y-4">
        <div className="overflow-y-auto flex flex-col gap-y-4">
          <Message
            userFullName="Tiffany May"
            date={new Date()}
            text="Hey John, I am looking for the best admin template, Could you please help me to find it out ? 🤔"
          />
          <div className="w-full flex flex-row-reverse">
            <Call
              avatarSrc="/icons/avatar.svg"
              date={new Date()}
              timeLeft="0:25"
            />
          </div>
        </div>

        <div className="chat-input w-full mt-auto text-lg">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default memo(Chat);
