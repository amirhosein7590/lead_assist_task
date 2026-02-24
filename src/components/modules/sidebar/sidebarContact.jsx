"use client";
import React, { useState, createContext, useContext, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import { LuPanelRight } from "react-icons/lu";
import UserAvatar from "../userAvatar";
import { LuPhone } from "react-icons/lu";
import { PiNoteThin } from "react-icons/pi";

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
  const isMobile = useCallback(() => {
    if (window.innerWidth <= 990) {
      return true;
    } else {
      return false;
    }
  }, []);
  const [isOpen, setIsOpen] = useState(isMobile ? false : defaultOpen);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <ContactSidebarContext.Provider value={{ isOpen, toggleSidebar }}>
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
  const { isOpen, toggleSidebar } = useContactSidebar();
  return (
    <>
      <aside
        className={cn(
          "h-full bg-background flex flex-col items-center transition-transform duration-300 border-l",
          "fixed inset-y-0 right-0 z-40 w-10/12 shadow-xl transform",
          isOpen ? "translate-x-0" : "translate-x-full",
          "lg:relative lg:translate-x-0 lg:w-4/12 lg:shadow-none",
        )}
      >
        <div className="flex flex-col items-center w-full px-4 py-6 border-b">
          <div className="info w-full flex flex-col items-center">
            <UserAvatar fullName="Tiffany May" className="w-16 h-16 lg:w-16 lg:h-16" />
            <span className="fullname font-semibold lg:text-xl mt-3 mb-1">
              Tiffany May
            </span>
            <span className="email text-(--base-gray) text-sm">
              johnsmith@abc.com
            </span>
          </div>
          <div className="buttons-wrapper justify-center w-full mt-2 flex items-center gap-x-2">
            <Button className="text-(--light-blue) cursor-pointer bg-blue-50 py-6 hover:bg-blue-100 flex items-center justify-center) w-1/2">
              <LuPhone color="var(--light-blue)" className="!w-5 !h-5" />
              Call
            </Button>
            <Button className="py-6 text-(--light-blue) cursor-pointer bg-blue-50 hover:!bg-blue-100 flex items-center justify-center) w-1/2">
              <PiNoteThin color="var(--light-blue)" className="!w-5 !h-5" />
              Add Note
            </Button>
          </div>
        </div>
         <div className="overflow-auto w-full h-[calc(100%-60px)]">{children}</div>
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
