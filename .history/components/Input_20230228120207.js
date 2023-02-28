import { EmojiHappyIcon, PhoneOutgoingIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      
        <img width="50" src="https://cdn.shopify.com/s/files/1/0467/5878/9279/products/2_da0f83d1-d83f-4209-836e-306ddbbd7845.jpg" alt="error" className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
        <div className="w-full divide-y divide-gray-200">
          <div className="">
              <textarea rows="2" className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" placeholder="What's happening?"></textarea>
           </div>
        <div className="flex items-center justify-between pt-2.5">
            <div className="flex">
              <PhoneOutgoingIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
              <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
            </div>
            <button>Tweet</button>
        </div>
      </div>
    </div>
  )
}
