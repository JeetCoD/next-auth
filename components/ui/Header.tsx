"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  return (
    <div className="w-full p-2 border-b flex justify-end">
      <Button
        variant="outline"
        size={"sm"}
        className="w-fit"
        onClick={() => signIn()}
      >
        Sign In
      </Button>
      <Button
        variant="destructive"
        size={"sm"}
        className="w-fit bg-red-700 mx-4"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>

      {JSON.stringify(session)}
    </div>
  );
}
