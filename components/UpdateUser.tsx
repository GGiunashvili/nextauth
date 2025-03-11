'use client';
import { useSession } from 'next-auth/react';
import React from 'react';

export default function UpdateUser() {
  const [name, setName] = React.useState('');
  const { data, update } = useSession();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setName(e.target.value);
  };

  console.log('data', data);
  return (
    <div>
      <h1>update user</h1>

      <div>
        <label htmlFor="name">Name</label>
        <input
          className="border"
          type="text"
          id="name"
          onChange={handleChange}
        />
        <button onClick={() => update({ name })}>
          Update
        </button>
      </div>
      <p>name: {data?.user.name}</p>
    </div>
  );
}
