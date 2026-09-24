"use client";

import axios from "axios";
import React, { useReducer } from "react";

import { useRouter } from "next/navigation";
export const BACKEND_URL = "http://localhost:5000/";

type SignUpProps = {
  username: string;
  email: string;
  password: string;
  id: string;
};
const user: SignUpProps = {
  username: "",
  email: "",
  password: "",
  id: crypto.randomUUID(),
};
const ACTION = {
  USERNAME: "username",
  EMAIL: "email",
  PASSWORD: "password",
};

function reducer(
  state: SignUpProps,
  action: { type: string; payload: string },
) {
  switch (action.type) {
    case ACTION.USERNAME:
      return { ...state, username: action.payload };
    case ACTION.EMAIL:
      return { ...state, email: action.payload };
    case ACTION.PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

export default function ClientSignUpPage() {
  const [state, dispatch] = useReducer(reducer, user);
  const router = useRouter();
  const handlerFunction: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    BACKEND_URL + "sign-up";
    e.preventDefault();
    const response = await axios.post(BACKEND_URL + "sign-up", {
      username: state.username,
      email: state.email,
      password: state.password,
    });
    if (response.data.success) {
      router.push("/signin");
    }
  };
  return (
    <>
      <form
        action=""
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handlerFunction(e)}
      >
        <label htmlFor="">Username: </label>
        <input
          value={state.username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: ACTION.USERNAME, payload: e.target.value })
          }
        />
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
        <button>SignUp</button>
      </form>
    </>
  );
}
