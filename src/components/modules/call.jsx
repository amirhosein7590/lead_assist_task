import React from "react";
import UserAvatar from "./userAvatar";
import { FiPhoneOutgoing } from "react-icons/fi";
import AudioPlayer from "./audioPlayer";

function Call({ avatarSrc, date, timeLeft, audioSrc, text }) {
  return (
    <div className="flex gap-x-2 flex-row-reverse mt-10 lg:mt-0 w-full max-w-full lg:w-100">
      <UserAvatar avatarSrc={avatarSrc} />
      <div className="message-info gap-y-2 lg:gap-y-3 flex flex-col flex-1 min-w-0">
        <span className="date text-xs text-(--base-gray) px-1">
          {date.toDateString()}
        </span>
        <div className="call-info w-full max-w-full flex flex-col gap-y-3 lg:gap-y-4 px-3 lg:px-4 py-2 bg-blue-100 rounded-sm">
          <div className="call-status gap-x-2 lg:gap-x-4 py-1 lg:py-2 px-2 lg:px-4 w-full flex items-center">
            {" "}
            <span className="icon-wrapper rounded-full p-2 lg:p-3 bg-blue-200 flex items-center justify-center flex-shrink-0">
              <FiPhoneOutgoing
                className="w-4 h-4 lg:!w-6 lg:!h-6"
                color="var(--light-blue)"
              />
            </span>
            <div className="flex flex-col gap-y-1 lg:gap-y-2 flex-1 min-w-0">
              <span className="font-semibold text-(--light-blue) text-sm lg:text-base truncate">
                Call ended
              </span>
              <span className="text-xs lg:text-sm font-semibold text-(--light-blue) truncate">
                You Called {timeLeft}
              </span>
            </div>
          </div>
          <div className="audio-wrapper px-2 lg:px-4 flex flex-col w-full">
            <span className="audio-status text-xs lg:text-sm text-(--light-blue)">
              Recording
            </span>
            <AudioPlayer
              className="mt-1 lg:mt-2 w-full"
              src="/music/sample-audio.mp3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Call;
