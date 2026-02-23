import React from "react";
import UserAvatar from "./userAvatar";

function Message({ userFullName, date, text }) {
  return (
    <div className="flex gap-x-2">
      <UserAvatar fullName={userFullName} />
      <div className="message-info gap-y-3 flex flex-col">
        <span className="date text-xs text-(--base-gray)">{date.toDateString()}</span>
        <span className="p-2 lg:w-4/12 rounded-sm bg-gray-100">{text}</span>
      </div>
    </div>
  );
}

export default Message;
