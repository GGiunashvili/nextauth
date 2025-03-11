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
    <div>
      <h1>Update User</h1>

      <Image
        src={data?.user?.picture as string}
        alt="User Picture"
        width={100}
        height={100}
      />
      <div className="flex gap-[20px]">
        <p>Name: {data?.user?.name}</p>
        <div className="flex gap-[20px]">
          <label htmlFor="name">Name</label>
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
        <p>Email: {data?.user?.email}</p>
        <div className="flex gap-[20px]">
          <label htmlFor="email">Email</label>
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

      <p>Updated Name: {name}</p>
      <p>Updated Email: {email}</p>
    </div>
  );
}
