"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { BsSend, BsEmojiSmile, BsPlusLg } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
import { GoPaperclip } from "react-icons/go";
import { CiMicrophoneOn } from "react-icons/ci";
import { PiImageSquareLight } from "react-icons/pi";
import { Input } from "./input";
import EmojiPicker from "./emojiPicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/modules/popover";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage?.(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const ExtraTools = () => (
    <>
      <Button size="sm" variant="ghost" className="w-10 h-10">
        <GoPaperclip className="!w-5 !h-5 text-gray-500" />
      </Button>
      <Button size="sm" variant="ghost" className="w-10 h-10">
        <CiMicrophoneOn className="!w-5 !h-5 text-gray-500" />
      </Button>
      <Button size="sm" variant="ghost" className="w-10 h-10">
        <PiImageSquareLight className="!w-5 !h-5 text-gray-500" />
      </Button>
      <Button size="sm" variant="ghost" className="w-10 h-10">
        <BiTimer className="!w-5 !h-5 text-blue-500" />
      </Button>
    </>
  );

  return (
    <div className="w-full border-t py-2 px-4 flex items-center gap-x-2">
      <EmojiPicker onEmojiSelect={handleEmojiSelect}>
        <Button
          size="sm"
          variant="ghost"
          className="flex items-center justify-center cursor-pointer w-10 h-10"
        >
          <BsEmojiSmile className="!w-5 !h-5 text-gray-600" />
        </Button>
      </EmojiPicker>

      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 border-0 shadow-none focus-visible:ring-0 focus-visible:outline-none"
        placeholder="Type a Message..."
      />

      <div className="hidden md:flex items-center gap-x-1">
        <ExtraTools />
      </div>

      <div className="block md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm" variant="ghost" className="w-10 h-10">
              <BsPlusLg className="!w-5 !h-5 text-gray-600" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="end">
            <div className="flex items-center gap-x-1">
              <ExtraTools />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Button
        size="sm"
        variant="ghost"
        onClick={handleSend}
        className="w-10 h-10"
        disabled={!message.trim()}
      >
        <BsSend className="!w-4 !h-4 text-blue-500" />
      </Button>
    </div>
  );
}

export default ChatInput;
