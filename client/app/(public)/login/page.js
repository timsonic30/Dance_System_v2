"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [userErr, setUserErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the form from submitting

    if (!user) {
      setUserErr("*用戶不存在或未登記");
    }

    if (!password) {
      setPasswordErr("密碼錯誤");
    }
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      setUser(value); // Update the user state
    } else if (name === "password") {
      setPassword(value); // Update the password state
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="border-amber-600 border-1 border-solid p-4 w-1/2">
          <h1 className="text-left text-xl font-bold ml-4 mt-4 mb-4">登入</h1>

          {/* Facebook */}
          <div className="mb-2">
            <button className="btn bg-white text-black border-[#e5e5e5] w-full">
              <svg
                aria-label="Facebook logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="blue"
                  d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                ></path>
              </svg>
              以 Facebook 登入
            </button>
          </div>
          {/* Google */}
          <div className="mb-3">
            <button className="btn bg-white text-black border-[#e5e5e5] w-full">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              以 Google 登入
            </button>
          </div>

          <div className="mb-3">
            <p className="text-center font-semibold">或以電話/電郵登入</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* User field */}
            <div>
              <input
                type="text"
                name="user"
                placeholder="電話號碼/電郵"
                value={user}
                onChange={handleOnChange}
                className="input w-full mb-2"
                style={{ width: "100%" }}
              />
            </div>
            <div className="h-6 mb-1">
              {userErr && (
                <p className="text-red-500 text-xs ml-2 mb-2">{`${userErr}`}</p>
              )}
            </div>
            {/* Password field */}
            <label className="input w-full mb-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="密碼"
                className="w-full"
              />
            </label>
            <div className="h-6 mb-1">
              {passwordErr && (
                <p className="text-red-500 text-xs ml-2">{passwordErr}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-amber-500 text-white w-full rounded-4xl"
              >
                登入
              </button>
            </div>
          </form>
          <div className="flex justify-between text-sm text-gray-500 mt-6 mb-10">
            <Link href="/register">
              <p className="cursor-pointer">未有帳號，立即註冊</p>
            </Link>
            <Link href="/forget-password">
              <p className="cursor-pointer">忘記密碼</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
