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
import { useSession, signIn } from "next-auth/react";
export default function Sidebar() {
  const{data:session} = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        {/*Twitter logo*/}
        <div className="hoverEffect p-2 hover:bg-blue-100 xl:px-1">
          <Image width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png" alt="error"></Image>
        </div>
        {/*Menu*/}
        <div className="mt-4 mb-2.5 xl:items-start">
          <SidebarMenuItem  text="Home" Icon={HomeIcon} active/>
          <SidebarMenuItem  text="Explore" Icon={HashtagIcon}/>
          {session && (
            <>
            <SidebarMenuItem  text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem  text="Messages" Icon={InboxIcon}/>
          <SidebarMenuItem  text="Bookmarks" Icon={BookmarkIcon}/>
          <SidebarMenuItem  text="Lists" Icon={ClipboardIcon}/>
          <SidebarMenuItem  text="Profile" Icon={UserIcon}/>
          <SidebarMenuItem  text="More" Icon={DotsCircleHorizontalIcon}/>
            </>
          )}
          
        </div>

        {session ? (
          <>
          {/*Button*/}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline 
        ">Tweet</button>

        {/*Mini-Profile*/}
        <div className="hoverEffecttext-gray-700 flex items-center justify-center xl:justify-start mt-auto">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="https://cdn.shopify.com/s/files/1/0467/5878/9279/products/2_da0f83d1-d83f-4209-836e-306ddbbd7845.jpg" alt="error" className="h-10 w-10 rounded-full xl:mr-2"/>
          <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">{session.user.name}</h4>
                <p className="text-gray-500">@yashashwinidutt</p>
          </div>
          <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>
          </>
          
        ) :(
          <button onClick={signIn} className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline 
          ">Sign in</button>
        )}

        
    </div>
  )
}
