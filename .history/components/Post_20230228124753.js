import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Post({ post }) {
  return (
    <div>
    {/*user image*/}
    <img src={post.userImg} alt="user-image"/>

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

      {/*icons*/}
      <div>

      </div>


    </div>


    </div>
  )
}
