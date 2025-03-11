import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Image from "next/image";
import UpdateUser from "@/components/UpdateUser";
export default async function Home() {
  const session = await getServerSession(options);

  console.log("sesia", session);

  return (
    <div className="flex bg-red-100 text-black">
      <div>
        <p>name: {session?.user?.name}</p>
        <p>email: {session?.user?.email}</p>
        <p>age: {session?.user?.age}</p>
      </div>
      <div>
        <Image
          src={session?.user?.picture as string}
          alt=""
          width={"100"}
          height={"100"}
        />
        <UpdateUser />
      </div>
    </div>
  );
}
