"use client";
import React, { useState } from "react";

export default function RegisterComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error);
      return;
    }

    setMessage("Registration successful!");
    console.log(message);
  }

  return (
    <div
      className="flex min-h-screen w-screen items-center justify-center font-mono text-red-400"
      style={{
        backgroundImage: `linear-gradient(rgba(29, 23, 23, 0.6), rgba(29, 23, 23, 0.6)), url('/login.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        className="
          bg-stone-900/30 p-20 rounded-xl w-full max-w-sm
          border-4 border-red-700/30 backdrop-blur-sm
          shadow-[8px_8px_20px_0px_rgba(0,0,0,5)]
        "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-red-400">
          Register
        </h2>

        <div className="mb-6">
          <label
            htmlFor="register"
            className="block text-sm font-medium mb-2 text-red-400"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
              w-full p-3 bg-stone-950 border-red-700 rounded-md text-red-400
              focus:ring-2 focus:ring-black focus:border-black transition duration-200
            "
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-2 text-red-400"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full p-3 bg-stone-950 border-red-700 rounded-md text-red-400
              focus:ring-2 focus:ring-black focus:border-black transition duration-200
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full py-3 bg-red-600/60 text-black font-semibold rounded-md
            hover:bg-red-900 transition duration-200 shadow-lg
            active:translate-y-0.5
          "
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
