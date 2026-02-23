import Image from "next/image";
import React, { memo } from "react";

function UserAvatar({ fullName, avatarSrc = "" }) {
  const nameNormalizeHandler = () => {
    if (!fullName) return "";
    const [firstName, lastName] = fullName?.split(" ");
    const firstNameFormated = firstName?.slice(0, 1) || "";
    const lastNameFormated = lastName?.slice(0, 1) || "";
    return { firstNameFormated, lastNameFormated };
  };
  const { firstNameFormated, lastNameFormated } = nameNormalizeHandler();
  return (
    <>
      {fullName && (
        <span className="rounded-full shrink-0 text-[16px] font-semibold w-10 h-10 lg:w-12 lg:h-12 bg-base-green text-white flex items-center justify-center">
          {firstNameFormated}
          {lastNameFormated}
        </span>
      )}

      {avatarSrc && (
        <span className="w-10 h-10 lg:w-12 lg:h-12 rounded-full shrink-0 flex items-center justify-center">
          <Image width={50} height={50} alt="user avatar" src={avatarSrc} />
        </span>
      )}
    </>
  );
}

export default memo(UserAvatar);
