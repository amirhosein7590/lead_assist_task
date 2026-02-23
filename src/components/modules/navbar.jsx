import { SidebarTrigger } from "@/components/modules/sidebar";
import Image from "next/image";
import { Button } from "./button";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";

export default function Navbar() {
  return (
    <header className="border-b h-14 px-2 !py-10 flex justify-between items-center flex-row-reverse">
      <SidebarTrigger className="mr-2 md:hidden order-1" />
      <nav>
        <ul className="flex flex-row-reverse items-center gap-x-4">
          <li className="account hover:text-primary cursor-pointer">
            <Image
              width={35}
              height={35}
              alt="account"
              src="/icons/account.svg"
            />
          </li>
          <li className="hover:text-primary cursor-pointer">
            <Button
              className="!p-0 flex justify-center items-center"
              variant="icon"
            >
              <AiOutlineThunderbolt
                color="var(--base-gray)"
                className="!w-6 !h-6"
              />
            </Button>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <Button
              className="!p-0 relative flex justify-center items-center"
              variant="icon"
            >
              <span className="rounded-full w-4 absolute top-0.5 left-2  h-4 flex items-center justify-center bg-red-500 text-white text-xs">
                1
              </span>
              <IoNotificationsOutline className="!w-5 !h-5" />
            </Button>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <Button
              className="!p-0 bg-blue-100 border border-(--ligh-blue) w-[112px] h-[40px] rounded-full px-4 py-2 flex justify-center items-center gap-x-2"
              variant="icon"
            >
              <BiWallet color="var(--light-blue)" className="!w-5 !h-5" />
              <span className="text-(--light-blue)">228$</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
