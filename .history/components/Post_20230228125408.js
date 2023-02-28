import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";

export default function Post({ post }) {
  return (
    <div className="flex">
    {/*user image*/}
    <img className="h-11 w-11 rounded-full" src={post.userImg} alt="user-image" />

    {/*right side*/}
    <div className="">

      {/*Header*/}
      <div>
        {/*post user info*/}
        <div>
          <h4>{post.name}</h4>
          <span>{post.username}</span>
          <span>{post.timestamp}</span>

        </div>
        {/*dot icon*/}
        <DotsHorizontalIcon className="h-10"/>
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
