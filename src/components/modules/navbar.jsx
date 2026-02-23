// components/layout/Navbar.jsx
import { SidebarTrigger } from "@/components/modules/sidebar";

export default function Navbar() {
  return (
    <header className="border-b h-14 flex items-center px-4">
      <SidebarTrigger className="mr-2 md:hidden" />
      <nav>
        <ul className="flex gap-4">
          <li className="hover:text-primary cursor-pointer"></li>
          <li className="hover:text-primary cursor-pointer"></li>
          <li className="hover:text-primary cursor-pointer"></li>
        </ul>
      </nav>
    </header>
  );
}
