"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { ModeToggle } from "./ui/theme-toggle";
import { ButtonSkeleton } from "./ui/button-skeleton";

const Navbar = () => {
  const { open } = useWeb3Modal();
  const { status, isConnected, isConnecting, isReconnecting } = useAccount();
  return (
    <div>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="#"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <span>ChainSub</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              Creators
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {isConnecting || isReconnecting ? (
              <ButtonSkeleton />
            ) : isConnected ? (
              <w3m-account-button balance="hide" />
            ) : (
              <Button variant="outline" onClick={() => open()} size="sm">
                Connect Wallet
              </Button>
            )}

            <ModeToggle />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
