import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export default async function About() {
  const session = await getServerSession(options);

  return (
    <div>
      {session?.user?.bio ? (
        <p>Bio: {session.user.bio}</p>
      ) : (
        <p>No bio available.</p>
      )}
    </div>
  );
}
