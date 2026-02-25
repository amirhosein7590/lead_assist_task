"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { Input } from "@/components/modules/input";
import { CiSearch } from "react-icons/ci";
import { MANAGEMENT, TOOLS } from "@/constants/sidebar-configs";
import NavItem from "../navItem";

const MainSidebarContext = createContext(null);

export function useMainSidebar() {
  const context = useContext(MainSidebarContext);
  if (!context) {
    throw new Error("useMainSidebar must be used within a MainSidebarProvider");
  }
  return context;
}

export function MainSidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <MainSidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </MainSidebarContext.Provider>
  );
}

export function MainSidebarTrigger({ className, children, ...props }) {
  const { toggleSidebar } = useMainSidebar();

  return (
    <Button
      variant="icon"
      size="icon"
      className={cn("size-7", className)}
      onClick={toggleSidebar}
      {...props}
    >
      {children || <AiOutlineMenu className="size-4" />}
    </Button>
  );
}

export function AppSidebar() {
  const { isOpen, toggleSidebar } = useMainSidebar();

  return (
    <>
      <aside
        className={cn(
          "bg-background border-r transition-transform duration-300",
          "fixed inset-y-0 left-0 z-40 w-64 shadow-xl transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:relative lg:translate-x-0 lg:shadow-none",
        )}
      >
        <div className="flex flex-col h-full overflow-auto">
          <div className="flex items-center flex-col gap-y-7 px-4 mb-4 pt-4">
            <Image width={218} height={72} alt="logo" src="/icons/logo.svg" />
            <div className="search-input flex px-2 justify-between items-center border border-gray-200 rounded-md focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] transition-[color,box-shadow]">
              <CiSearch
                className="!w-[32px] !h-[24px]"
                color="var(--base-gray)"
              />
              <Input
                className="border-0 shadow-none !py-0 focus-visible:ring-0 focus-visible:outline-none"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="px-2 flex-1">
            <div className="mb-4">
              <p className="text-xs font-medium text-muted-foreground px-3 py-2 mb-2">
                MANAGEMENT
              </p>
              <div className="space-y-1">
                {MANAGEMENT.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs font-medium text-muted-foreground px-3 py-2 mb-2">
                TOOLS
              </p>
              <div className="space-y-1">
                {TOOLS.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
