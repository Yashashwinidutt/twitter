import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid";
export default function Sidebar() {
  return (
    <div>
        {/*Twitter logo*/}
        <div className="">
          <Image width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png" alt="error"></Image>
        </div>
        {/*Menu*/}
        <div className="">
          <SidebarMenuItem  text="Home" Icon={HomeIcon}/>
        </div>

        {/*Button*/}

        {/*Mini-Profile*/}
    </div>
  )
}
