"use client";

import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function header() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut().then(() => {
      router.push("/");
    });
  };

  return (
    <div>
      <nav className="bg-sky-700 flex gap-2">
        <Link href={"/api/auth/signin"}>Login</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>profile</Link>

        <button onClick={handleSignOut}>Sign out</button>
        <Link href={"/about"}>About</Link>
      </nav>
    </div>
  );
}
