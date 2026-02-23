// components/modules/sidebar/simpleContactSidebar.jsx
"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../button";
import { LuPanelRight } from "react-icons/lu";

const ContactSidebarContext = createContext(null);

export function useContactSidebar() {
  const context = useContext(ContactSidebarContext);
  if (!context) {
    throw new Error(
      "useContactSidebar must be used within a ContactSidebarProvider",
    );
  }
  return context;
}

export function ContactSidebarProvider({ children, defaultOpen = true }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <ContactSidebarContext.Provider value={{ isOpen, toggleSidebar, isMobile }}>
      {children}
    </ContactSidebarContext.Provider>
  );
}

export function ContactSidebarTrigger({ className, children, ...props }) {
  const { toggleSidebar } = useContactSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={toggleSidebar}
      {...props}
    >
      {children || <LuPanelRight className="size-4" />}
    </Button>
  );
}

export function SidebarContact({ children }) {
  const { isOpen, toggleSidebar, isMobile } = useContactSidebar();

  return (
    <>
      <aside
        className={cn(
          "h-full bg-background flex flex-col items-center transition-all duration-300 w-4/12",
          isMobile
            ? "fixed w-8/12 inset-y-0 right-0 z-40 shadow-xl border-l"
            : "relative w-4/12 border-l",
          isMobile && !isOpen && "translate-x-full",
        )}
      >
        <div className="flex flex-col items-center w-full p-4 border-b">
          <h2 className="font-semibold">Profile</h2>
        </div>

        <div className="p-4 overflow-auto h-[calc(100%-60px)]">{children}</div>
      </aside>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
