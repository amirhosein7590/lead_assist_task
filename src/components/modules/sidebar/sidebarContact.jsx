"use client";
import React, { useState, createContext, useContext, useCallback } from "react";
import { cn } from "@/lib/utils";
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
          "fixed inset-y-0 right-0 z-40 w-8/12 shadow-xl transform",
          isOpen ? "translate-x-0" : "translate-x-full",
          "lg:relative lg:translate-x-0 lg:w-1/4 lg:shadow-none",
        )}
      >
        <div className="flex flex-col items-center w-full p-4 border-b">
          <h2 className="font-semibold">Profile</h2>
        </div>
         <div className="p-4 overflow-auto h-[calc(100%-60px)]">{children}</div>
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
