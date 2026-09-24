"use client";

import axios from "axios";
import React, { useReducer } from "react";
import { BACKEND_URL } from "../room/[slug]/page";
import { useRouter } from "next/navigation";

type SignInProps = {
  email: string;
  password: string;
};
const user: SignInProps = {
  email: "",
  password: "",
};
const ACTION = {
  EMAIL: "email",
  PASSWORD: "password",
};

function reducer(
  state: SignInProps,
  action: { type: string; payload: string },
) {
  switch (action.type) {
    case ACTION.EMAIL:
      return { ...state, email: action.payload };
    case ACTION.PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

export default function ClientSignInPage() {
  const [state, dispatch] = useReducer(reducer, user);
  const router = useRouter();
  const handlerFunction: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    console.log(BACKEND_URL + "sign-in");
    e.preventDefault();
    const response = await axios.post(BACKEND_URL + "sign-in", {
      email: state.email,
      password: state.password,
    });
    if (response.data.message === "Login Successful") {
      router.push("/");
    } else {
      alert("Credentails are wrong");
    }
  };
  return (
    <>
      <form
        action=""
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handlerFunction(e)}
      >
        <label htmlFor="">Email: </label>
        <input
          value={state.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: ACTION.EMAIL, payload: e.target.value })
          }
        />
        <label htmlFor="">Password: </label>
        <input
          value={state.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: ACTION.PASSWORD, payload: e.target.value })
          }
        />
        <button>SignIn</button>
      </form>
    </>
  );
}
