import { useSession } from "next-auth/client";

export default function Home() {
  const [session] = useSession();
  return (
    <>
      <div> {session?.user?.email} </div>
      <div> {session?.user?.name} </div>
    </>
  )
}
