"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [userData, setUaserData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUaserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signIn("credentials", {
      username: userData.username,
      password: userData.password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/profile");
    }
  };

  const handleGithubSignIn = async () => {
    const response = await signIn("github", {
      redirect: false,
      callbackUrl: "/profile",
    });

    if (response?.ok) {
      router.push(response.url || "/profile");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        action=""
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <p className=" bg-red-500">signin</p>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            className="border border-gray-300 text-black rounded-lg w-full p-2"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="border border-gray-300 text-black rounded-lg w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
        <button
          onClick={handleGithubSignIn}
          type="button"
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-gray-900 transition duration-300 flex items-center justify-center mt-5"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Sign in with GitHub
        </button>
      </form>
    </div>
  );
}
