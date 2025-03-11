import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Image from "next/image";
import UpdateUser from "@/components/UpdateUser";
export default async function Home() {
  const session = await getServerSession(options);

  console.log("sesia", session);

  return (
    <div className="flex gap-[10px] justify-center items-center h-screen bg-red-100 text-3xl">
      <p>Hello {session?.user?.name}</p>
    </div>
  );
}
