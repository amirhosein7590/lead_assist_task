import React from "react";
import UserAvatar from "./userAvatar";
import { FiPhoneOutgoing } from "react-icons/fi";
import AudioPlayer from "./audioPlayer";

function Call({ avatarSrc, date, timeLeft, audioSrc, text }) {
  return (
    <div className="flex gap-x-2 flex-row-reverse mt-10 lg:mt-0">
      <UserAvatar avatarSrc={avatarSrc} />
      <div className="message-info gap-y-3 flex flex-col">
        <span className="date text-xs text-(--base-gray)">
          {date.toDateString()}
        </span>
        <div className="call-info w-full lg:w-100 flex flex-col gap-y-4 px-4 py-2 bg-blue-100 rounded-sm">
          <div className="call-status gap-x-4 py-2 px-4 w-full flex items-center">
            <span className="icon-wrapper rounded-full p-3 bg-blue-200 flex items-center justify-center">
              <FiPhoneOutgoing
                className="w-5 h-5 lg:!w-7 lg:!h-7"
                color="var(--light-blue)"
              />
            </span>
            <div className="flex flex-col gap-y-2">
              <span className="font-semibold text-(--light-blue)">
                Call ended
              </span>
              <span className="text-sm font-semibold text-(--light-blue)">
                You Called {timeLeft}
              </span>
            </div>
          </div>
          <div className="audio-wrapper px-4 flex flex-col">
            <span className="audio-status text-sm text-(--light-blue)">
              Recording
            </span>
            <AudioPlayer className="mt-2" src="/music/sample-audio.mp3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Call;
