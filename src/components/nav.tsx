import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

const Nav = () => {
  const isUserLogginIn: boolean = true;

  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProvider(response);
    };
    setProviders();
  }, []);
  return (
    <div>
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
          {" "}
          <p className="logo_text">Promptopia</p>
        </Link>
        <div className="sm:flex hidden">
          {isUserLogginIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="create-prompt" className="black_btn">
                Create Post
              </Link>
              <button
                type="button"
                onClick={() => {
                  signOut();
                }}
                className="outline_btn"
              >
                Sing Out
              </button>
              <Link href="Profile" className="black_btn">
                Profile
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
