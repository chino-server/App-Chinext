"use client";
import React from "react";
import { useState } from "react";
import axios from 'axios'

const LoginForm = () => {
  const [credential, setCredentials] = useState({ email: "", password: "" });
  const handlerChange = (e) => {
    setCredentials({ ...credential, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(credential)
    const response = await axios.post ('http://localhost:8080/api/login', credential)
    console.log(response)
  
  };
  return (
    <div className="w-full max-w-lg">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-sm m-4 p-10 bg-white bg-opacity-10 rounded-xl shadow-xl"
        >
          <p className="text-orange-500 font-medium text-center text-lg font-bold">
            LOGIN
          </p>
          <div className="">
            <label className="block text-sm text-white" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="email"
              id="email"
              name="email"
              placeholder="Digite o e-mail"
              aria-label="email"
              required
              onChange={handlerChange}
              autoComplete="on"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-white">Password</label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="password"
              id="password"
              name="password"
              placeholder="Digite a sua senha"
              aria-label="password"
              required
              autoComplete="on"
              onChange={handlerChange}
            />
          </div>

          <div className="mt-4 items-center flex justify-center">
            <button
              className="px-10 py-1 text-white font-light tracking-wider bg-cyan-600 hover:bg-gray-800 rounded"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
