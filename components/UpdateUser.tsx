"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

export default function UpdateUser() {
  const [name, setName] = React.useState("");
  const { data, update } = useSession();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  console.log("data", data);
  return (
    <div>
      <h1>update user</h1>
      <Image
        src={data?.user?.picture as string}
        alt=""
        width={"100"}
        height={"100"}
      />
      <div className="flex gap-[20px]">
        <p>name: {data?.user.name}</p>
        <div className="flex gap-[20px]">
          <label htmlFor="name">Name</label>
          <input
            className="border"
            type="text"
            id="name"
            onChange={handleChange}
          />
          <button onClick={() => update({ name })}>Update</button>
        </div>
      </div>

      <p>name: {data?.user.email}</p>
      <p>name: {data?.user.age}</p>
    </div>
  );
}
