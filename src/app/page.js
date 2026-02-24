// app/page.js
import Chat from "@/components/templates/Index/chat";
import {
  SidebarContact,
  ContactSidebarProvider,
} from "@/components/modules/sidebar/sidebarContact";
import { memo } from "react";
import TagList from "@/components/templates/Index/tagList";

function Home() {
  return (
    <ContactSidebarProvider>
      <div className="flex h-full">
        <Chat />
        <SidebarContact>
          <div className="flex flex-col">
          <TagList  />
          </div>
        </SidebarContact>
      </div>
    </ContactSidebarProvider>
  );
}

export default memo(Home);
