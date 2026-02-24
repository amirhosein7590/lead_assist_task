"use client";

import React, { memo, useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { IoChevronDown, IoSettingsOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { PiChartLineUpLight } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { PiNewspaperClippingThin } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

const icons = {
  MdOutlineSpaceDashboard,
  PiHandbagLight,
  PiChartLineUpLight,
  IoPeople,
  BsPeopleFill,
  PiNewspaperClippingThin,
  BiSupport,
  IoSettingsOutline,
};

function NavItem({
  text,
  icon,
  children = [],
  listStyle = false,
  color = "var(--base-gray)",
  itemClassName = "",
  textClassName = "",
  iconClassName = "w-5 h-5 ml-2",
  level = 0,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children && children.length > 0;
  const IconComponent = icon ? icons[icon] : null;

  const paddingLevel = level * 6;

  const textColor = level === 0 ? color : "var(--base-gray-light)";

  return (
    <li className="list-none w-full">
      <div
        className={`flex items-center justify-between py-2 hover:bg-gray-50 rounded-md cursor-pointer transition-all duration-200 ${itemClassName} ${
          isOpen ? "bg-gray-50/50" : ""
        }`}
        style={{ paddingRight: `${16 + paddingLevel}px` }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {listStyle &&
            <GoDotFill className="!w-2 !h-2 ml-3" />
          }

          {IconComponent && (
            <IconComponent
              className={`${iconClassName} flex-shrink-0`}
              style={{ color: isOpen ? "var(--light-blue)" : textColor }}
            />
          )}

          <span
            className={`text-sm truncate mx-2 ${textClassName}`}
            style={{ color: isOpen ? "var(--light-blue)" : textColor }}
            title={text}
          >
            {text}
          </span>
        </div>

        {hasChildren && (
          <span className="flex-shrink-0 mr-1">
            {isOpen ? (
              <IoChevronDown className="w-4 h-4" style={{ color: textColor }} />
            ) : (
              <MdChevronRight
                className="w-4 h-4"
                style={{ color: textColor }}
              />
            )}
          </span>
        )}
      </div>

      {hasChildren && isOpen && (
        <ul className="mt-1 space-y-0.5">
          {children.map((child, index) => (
            <NavItem key={index} {...child} level={level + 1} color={color} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default memo(NavItem);
