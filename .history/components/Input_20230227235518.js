import { EmojiHappyIcon, PhoneOutgoingIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div>
        <img width="50" src="https://cdn.shopify.com/s/files/1/0467/5878/9279/products/2_da0f83d1-d83f-4209-836e-306ddbbd7845.jpg" alt="error" className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
        <div className="">
          <div className="">
              <textarea rows="2" placeholder="What's happening?"></textarea>
           </div>
        <div className="">
            <div className="">
              <PhoneOutgoingIcon className="h-10 w-10"/>
              <EmojiHappyIcon className="h-10 w-10"/>
            </div>
            <button>Tweet</button>
        </div>
      </div>
    </div>
  )
}
