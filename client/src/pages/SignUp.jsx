import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-2 max-w-md mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-s-md"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-s-md"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-s-md"
          id="password"
        />
        <button className="border p-3 rounded-lg bg-slate-500 text-white font-semibold hover:opacity-80 disabled:opacity-50">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/signin" className="text-blue-500">
          <span className="underline hover:opacity-80">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
