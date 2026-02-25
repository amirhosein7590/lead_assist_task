import React, { useState, memo } from "react";
import { Button } from "@/components/modules/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/modules/popover";
import { BsEmojiSmile } from "react-icons/bs";

const EMOJI_LIST = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🥸",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🤯",
  "😳",
  "🥵",
  "🥶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🤗",
  "🤔",
  "🤭",
  "🤫",
  "🤥",
  "😶",
  "😐",
  "😑",
  "😬",
  "🙄",
  "😯",
  "😦",
  "😧",
  "😮",
  "😲",
  "🥱",
  "😴",
  "🤤",
  "😪",
  "😵",
  "🤐",
  "🥴",
  "🤢",
  "🤮",
  "🤧",
  "😷",
  "🤒",
  "🤕",
  "🤑",
  "🤠",
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐸",
  "🐒",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🖤",
  "🤍",
  "🤎",
  "💔",
  "🔥",
  "✨",
  "⭐",
  "🌟",
  "💫",
  "💥",
  "💢",
  "💦",
  "💨",
  "🕳️",
];

function EmojiPicker({ onEmojiSelect, children, ...props }) {
  const [open, setOpen] = useState(false);

  const handleEmojiClick = (emoji) => {
    if (onEmojiSelect) {
      onEmojiSelect(emoji);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        {children || (
          <Button
            size="sm"
            variant="ghost"
            className="w-12 h-12 text-2xl !p-0 hover:bg-transparent cursor-pointer"
          >
            <BsEmojiSmile />
          </Button>
        )}
      </PopoverTrigger>

      <PopoverContent className="w-80 p-2" align="start">
        <div className="grid grid-cols-8 gap-1 max-h-64 overflow-y-auto">
          {EMOJI_LIST.map((emoji, index) => (
            <Button
              size="sm"
              variant="ghost"
              key={index}
              onClick={() => handleEmojiClick(emoji)}
              className="text-2xl p-2 select-none hover:bg-gray-100 rounded-md transition-colors"
              title={emoji}
            >
              {emoji}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default memo(EmojiPicker);
