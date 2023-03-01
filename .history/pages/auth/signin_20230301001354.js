import{getProviders} from "next-auth/react";
export default function signin(providers) {
  return (
    <div>
      <img src="https://www.techbooky.com/wp-content/uploads/2021/07/4859E08D-388B-4475-9FCC-C05914CC654A.png" alt="twitter image inside a phone"/>
    </div>
  )
}

export async function getServerSideProps(){
  const providers = await getProviders()
  return{
    props:{
      providers,
    }
  }
}