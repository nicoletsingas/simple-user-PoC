"use client";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.user);
  const showStatus = () => {
    return (
      <span
        className={`${user.isVerified ? "text-green-600" : "text-red-600"} `}
      >
        {user.isVerified ? "Verified" : "Unverified"}
      </span>
    );
  };

  return (
    <div className="w-full">
      <h1 className="text-xl">Nome: {user.nome}</h1>
      <h1 className="text-xl">Email: {user.email}</h1>
      <h1 className="text-xl">Status: {showStatus()}</h1>
    </div>
  );
}
