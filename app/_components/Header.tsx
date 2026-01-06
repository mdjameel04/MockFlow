"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-2 items-center">
        <Image src={"/logo1.png"} alt="" width={40} height={60} />
        <h2 className="text-xl font-semibold ">
          {" "}
          <span className="text-primary">UIUX</span> Mockup
        </h2>
      </div>

      <ul className="flex gap-5 items-center text-lg">
        <li className="hover:text-primary cursor-pointer text-lg font-bold">
          Home
        </li>
        <li className="hover:text-primary cursor-pointer text-lg font-bold">
          Pricing
        </li>
      </ul>

      {!user ? (
        <SignInButton mode="modal">
          <Button className=""> Get Started </Button>
        </SignInButton>
      ) : (
        <UserButton />
      )}
    </div>
  );
};

export default Header;
