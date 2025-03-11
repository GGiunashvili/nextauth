"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

export default function UpdateUser() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const { data, update } = useSession();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUpdateName = async () => {
    if (name && name !== data?.user?.name) {
      await update({ name });
    }
  };

  const handleUpdateEmail = async () => {
    if (email && email !== data?.user?.email) {
      await update({ email });
    }
  };

  console.log("data", data);
  return (
    <div className="flex flex-col gap-[10px] p-[16px]">
      <h1>Update User</h1>

      <Image
        src={data?.user?.picture as string}
        alt="profile picture"
        width={200}
        height={200}
      />
      <div className="flex gap-[20px]">
        <div className="flex gap-[20px]">
          <label htmlFor="name">Name: {data?.user?.name}</label>
          <input
            className="border"
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
          />
          <button onClick={handleUpdateName}>Update Name</button>
        </div>
      </div>

      <div className="flex gap-[20px]">
        <div className="flex gap-[20px]">
          <label htmlFor="email">Email: {data?.user?.email}</label>
          <input
            className="border"
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <button onClick={handleUpdateEmail}>Update Email</button>
        </div>
      </div>

      {data?.user?.bio && <p>Bio: {data.user.bio}</p>}
    </div>
  );
}
