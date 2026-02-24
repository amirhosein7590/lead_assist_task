import Chat from "@/components/templates/Index/chat";
import {
  SidebarContact,
  ContactSidebarProvider,
} from "@/components/modules/sidebar/sidebarContact";
import { memo } from "react";
import TagList from "@/components/templates/Index/tagList";
import Information from "@/components/templates/Index/information";

function Home() {
  return (
    <ContactSidebarProvider>
      <div className="flex h-full">
        <Chat />
        <SidebarContact>
          <div className="flex flex-col">
          <TagList  />
          <Information />
          </div>
        </SidebarContact>
      </div>
    </ContactSidebarProvider>
  );
}

export default memo(Home);
