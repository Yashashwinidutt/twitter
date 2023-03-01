import{getProviders} from "next-auth/react";
export default function signin() {
  return (
    <div>signin</div>
  )
}

export async function getServerSideProps(){
  const providers = await getProviders()
}