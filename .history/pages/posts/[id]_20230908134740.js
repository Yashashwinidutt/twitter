import Head from 'next/head'
import CommentModal from '../../components/CommentModal'
import Sidebar from '../../components/Sidebar'
import Widgets from '../../components/Widgets'
import { ArrowCircleLeftIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'

export default function Post({newsResults,randomUsersResults}) {
    const router = useRouter();
    const {id} = router.query;
    const [post, setPost] = useState()

    useEffect(()=> onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),[db,id])
  return (
    <div>
      <Head>
        <title>Post page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto ">

        {/*Sidebar*/}
        <Sidebar/>

        {/*Feed*/}
        <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="hoverEffect" onClick={()=> router.push("/")}>
                <ArrowCircleLeftIcon className="h-5"/>
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Tweet</h2>
            </div>
            <Post id={id} post={post}/>
        </div>


        {/*Widgets*/}
        <Widgets newsResults={newsResults.articles} randomUsersResults={randomUsersResults.results}/>

        {/*Modal*/}
        <CommentModal></CommentModal>

      </main>

    </div>
  )
}
//https://saurav.tech/NewsAPI/top-headlines/category/business/in.json

export async function getServerSideProps(){
  const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then((res)=>res.json());

  //Who to follow section
  const randomUsersResults = await fetch("https://randomuser.me/api/?results=30&inc=name,login,picture").then((res)=>res.json());
  return{
    props:{
      newsResults,randomUsersResults
    }
  }
}
