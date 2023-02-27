import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid"
import {HashtagIcon} from "@heroicons/react/outline"
import {BellIcon} from "@heroicons/react/outline"
import {InboxIcon} from "@heroicons/react/outline"
import {BookmarkIcon} from "@heroicons/react/outline"
import {ClipboardIcon} from "@heroicons/react/outline"
import {UserIcon} from "@heroicons/react/outline"
import {DotsCircleHorizontalIcon} from "@heroicons/react/outline"
import {DotsHorizontalIcon} from "@heroicons/react/outline"
export default function Sidebar() {
  return (
    <div>
        {/*Twitter logo*/}
        <div className="hoverEffect">
          <Image width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png" alt="error"></Image>
        </div>
        {/*Menu*/}
        <div className="">
          <SidebarMenuItem  text="Home" Icon={HomeIcon} active/>
          <SidebarMenuItem  text="Explore" Icon={HashtagIcon}/>
          <SidebarMenuItem  text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem  text="Messages" Icon={InboxIcon}/>
          <SidebarMenuItem  text="Bookmarks" Icon={BookmarkIcon}/>
          <SidebarMenuItem  text="Lists" Icon={ClipboardIcon}/>
          <SidebarMenuItem  text="Profile" Icon={UserIcon}/>
          <SidebarMenuItem  text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>

        {/*Button*/}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline 
        ">Tweet</button>

        {/*Mini-Profile*/}
        <div className="hoverEffecttext-gray-700 flex items-center justify-center xl:justify-start">
          <Image width="50" height="50" src="https://cdn.shopify.com/s/files/1/0467/5878/9279/products/2_da0f83d1-d83f-4209-836e-306ddbbd7845.jpg" alt="error"/>
          <div className="">
                <h4>Yashashwini Dutt Dubey</h4>
                <p>
                  @yashashwinidutt
                </p>
          </div>
          <DotsHorizontalIcon className="h-5 "/>
        </div>
    </div>
  )
}
