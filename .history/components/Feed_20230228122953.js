import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts =[
    {
      id:"1",
      name:"Yashashwini Dutt Dubey",
      username: "yashashwinidutt",
      userImg:"https://cdn.shopify.com/s/files/1/0467/5878/9279/products/2_da0f83d1-d83f-4209-836e-306ddbbd7845.jpg",
      img:"https://images.unsplash.com/photo-1609386464554-31f6618a86b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text:"The beast!",
      timestamp:"2 hours ago"
    },
    {
      id:"2",
      name:"Yashashwini Dutt Dubey",
      username: "yashashwinidutt",
      userImg:"https://cdn.shopify.com/s/files/1/0467/5878/9279/products/2_da0f83d1-d83f-4209-836e-306ddbbd7845.jpg",
      img:"https://images.unsplash.com/photo-1607603750909-408e193868c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text:"Issa Supwaaaaaaa!",
      timestamp:"2 days ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
            <SparklesIcon className="h-5"/>
        </div>
      </div>
      <Input/>
      {post.map((post)=>(
        <Post />
      ))}
    </div>
  )
}
