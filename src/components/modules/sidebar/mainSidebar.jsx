"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../button";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { Input } from "@/components/modules/input";
import { CiSearch } from "react-icons/ci";
import { MANAGEMENT, TOOLS } from "@/constants/sidebar-configs";
import NavItem from "../navItem";

// Context
const MainSidebarContext = createContext(null);

// Hook
export function useMainSidebar() {
  const context = useContext(MainSidebarContext);
  if (!context) {
    throw new Error("useMainSidebar must be used within a MainSidebarProvider");
  }
  return context;
}

// Provider
export function MainSidebarProvider({ children, defaultOpen = true }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile && defaultOpen);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <MainSidebarContext.Provider value={{ isOpen, toggleSidebar, isMobile }}>
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

// Main Sidebar Component
export function AppSidebar() {
  const { isOpen, toggleSidebar, isMobile } = useMainSidebar();

  return (
    <>
      <aside
        className={cn(
          "h-screen bg-background transition-all duration-300 border-r",
          isMobile
            ? "fixed inset-y-0 left-0 z-40 w-64 shadow-xl"
            : "relative w-64",
          isMobile && !isOpen && "-translate-x-full",
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

      {/* اویرلی برای موبایل */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
