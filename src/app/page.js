// app/page.js
import Chat from "@/components/templates/Index/chat";
import {
  SidebarContact,
  ContactSidebarProvider,
} from "@/components/modules/sidebar/sidebarContact";
import { memo } from "react";

function Home() {
  return (
    <ContactSidebarProvider>
      <div className="flex h-full">
        <Chat />
        <SidebarContact>
          <div>
            <h3 className="font-medium mb-2">Contact Info</h3>
            <p className="text-sm text-gray-600">Tiffany May</p>
            <p className="text-sm text-gray-600">+971(825)1256</p>
          </div>
        </SidebarContact>
      </div>
    </ContactSidebarProvider>
  );
}

export default memo(Home);
