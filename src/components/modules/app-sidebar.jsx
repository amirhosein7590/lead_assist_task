"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from "@/components/modules/sidebar";
import Image from "next/image";
import { Input } from "@/components/modules/input";
import { CiSearch } from "react-icons/ci";
import NavItem from "./navItem";
import { MANAGEMENT, TOOLS } from "@/constants/sidebar-configs";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center flex-col gap-y-7 px-4 mb-4">
        <Image width={218} height={72} alt="logo" src="/icons/logo.svg" />
        <div className="search-input flex px-2 justify-between items-center border border-gray-200 rounded-md focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] transition-[color,box-shadow]">
          <CiSearch className="!w-[32px] !h-[24px]" color="var(--base-gray)" />
          <Input
            className="border-0 shadow-none !py-0 focus-visible:ring-0 focus-visible:outline-none"
            placeholder="Search..."
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <p className="text-xs font-medium text-muted-foreground px-3 py-2 mb-2">
            MANAGEMENT
          </p>
          <div className="space-y-1">
            {MANAGEMENT.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <p className="text-xs font-medium text-muted-foreground px-3 py-2 mb-2">
            TOOLS
          </p>
          <div className="space-y-1">
            {TOOLS.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
