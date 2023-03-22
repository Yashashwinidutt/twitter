import { EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useSession,signOut } from "next-auth/react";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";


export default function Input() {
  const{data:session} = useSession();
  const[input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const sendPost = async ()=> {
    const docRef = await addDoc(collection(db,"posts"),{
      id: session.user.uid,
      text: input,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if(selectedFile){
      await uploadString(imageRef, selectedFile, "data_url").then(async()=>{
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id),{
          image: downloadURL,
        })
      });
    }

    setInput("");
    setSelectedFile(null);
  };
  const addImageToPost = (e) => {
      const reader = new FileReader();
      if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
      }

      reader.onload=(readerEvent)=> {
        setSelectedFile(readerEvent.target.result);
      };
  };
  return (
    <>
    {session && (

<div className="flex border-b border-gray-200 p-3 space-x-3">

<img onClick={signOut}
width="50" src="https://cdn.shopify.com/s/files/1/0467/5878/9279/products/2_da0f83d1-d83f-4209-836e-306ddbbd7845.jpg" alt="error" className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
<div className="w-full divide-y divide-gray-200">
  <div className="">
      <textarea rows="2" className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" placeholder="What's happening?" value={input}
      onChange={(e)=>setInput(e.target.value)}></textarea>
   </div>
   {selectedFile && (
    <div className="relative">
      <XIcon onClick={()=> setSelectedFile(null)} className="h-7 text-black absolute cursor-pointer"/>
      <img src={selectedFile}/> 
    </div>
   )}
<div className="flex items-center justify-between pt-2.5">
    <div className="flex">
      <div onClick={()=>filePickerRef.current.click()}>
        <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
        <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
      </div>
      
      <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
    </div>
    <button onClick={sendPost} disabled={!input.trim()} className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
</div>
</div>
</div>

)
}
    </>
  )
}
