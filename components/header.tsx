"use client";

import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
export default function header() {
  return (
    <div>
      <nav className="bg-sky-700 flex gap-2">
        <Link href={"/api/auth/signin"}>Login</Link>
        <Link href={"/"}>Home</Link>
        <button onClick={() => signOut()}>Sign out</button>
        {/* <Link href={"/api/auth/signout"}>signoutttttt</Link> */}
        <Link href={"/about"}>about</Link>
      </nav>
    </div>
  );
}
