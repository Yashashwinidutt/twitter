import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";

export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
    {/*user image*/}
    <img className="h-11 w-11 rounded-full mr-4" src={post.userImg} alt="user-image" />

    {/*right side*/}
    <div className="">

      {/*Header*/}
      <div>
        {/*post user info*/}
        <div className="flex space-x-1">
          <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
          <span>@{post.username} - </span>
          <span>{post.timestamp}</span>

        </div>
        {/*dot icon*/}
        <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>
      </div>

      {/*Post text*/}

      <p>
        {post.text}
      </p>

      {/*post image*/}
      <img src={post.img} alt="post-image"/>

      {/*icons*/}
      <div>
        {/*like button*/}<ChatIcon className="h-9"/>
        <TrashIcon className="h-9"/>
        <HeartIcon className="h-9"/>
        <ShareIcon className="h-9"/>
        <ChartBarIcon className="h-9"/>

      </div>


    </div>


    </div>
  )
}
