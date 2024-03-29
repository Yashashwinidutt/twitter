import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import Moment from "react-moment";
import {collection, deleteDoc, doc, onSnapshot, setDoc} from "firebase/firestore";
import { db, storage } from "../firebase";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import { deleteObject, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import { postIDState } from "../atom/modalAtom";

export default function Post({ post, id }) {
  const { data: session} = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postID, setPostID] = useRecoilState(postIDState);


  useEffect(()=>{
      const unsubscribe = onSnapshot(
        collection(db,"posts", id,"likes"),(snapshot)=>
        setLikes(snapshot.docs)
      );
  },[db]);

  useEffect(()=>{
      setHasLiked(likes.findIndex((like)=>like.id==session?.user.uid) !== -1)
  },[likes])

  async function likePost(){
    if(session){
      if(hasLiked){
        await deleteDoc(doc(db,"posts",id,"likes",session?.user.uid))
    }else{
        await setDoc(doc(db,"posts",id,"likes",session?.user.uid),{username:session.user.username});
    }
    }else{
      signIn();
    }
  }

  async function deletePost(){
    if(window.confirm('Are you sure you want to delete this post?')){
      deleteDoc(doc(db,"posts",id))
      if(post.data().image){
        deleteObject(ref(storage,`posts/${id}/image`));
      }
    }
  }

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
    {/*user image*/}
    <img className="h-11 w-11 rounded-full mr-4" src={post.data().userImg} alt="user-image" />

    {/*right side*/}
    <div className="">

      {/*Header*/}
      <div className="flex items-center justify-between">
        {/*post user info*/}
        <div className="flex items-center space-x-1 whitespace-nowrap">
          <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.data().name}</h4>
          <span className="text-sm sm:text-[15px]">@{post.data().username} - </span>
          <span className="text-sm sm:text-[15px] hover:underline">
            <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
          </span>
        </div>
        {/*dot icon*/}
        <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>
      </div>

      {/*Post text*/}

      <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
        {post.data().text}
      </p>

      {/*post image*/}
      <img className="rounded-2xl mr-2 object-contain" alt="error" src={post.data().image}/>

      {/*icons*/}
      <div className="flex justify-between text-gray-500 p-2">
        {/*like button*/}
        <ChatIcon onClick={()=> {
          if(!session){
            signIn();
          }else{
          setPostID(id);
          setOpen(!open);
          }
        }}
          className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>

        {session?.user.uid === post?.data().id && (
            <TrashIcon onClick={deletePost} className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/> 
        )}
        
        
        <div className="flex items-center">
            {hasLiked ? (<HeartIconFilled 
              onClick={likePost} className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100"/>
            ): (
              <HeartIcon
                onClick={likePost} className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
            )}
            {
              likes.length>0 && (
                <span className={`${hasLiked && "text-red-600"} text-sm select-none`}>{" "}{likes.length}</span>
              )
            }
        </div>
        
        
        <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
        <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>

      </div>


    </div>


    </div>
  )
}
