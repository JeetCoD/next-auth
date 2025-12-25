// we make a root level provider and keep all the providers like session, recoil in the same file and accept the components as children from root layout.
"use client";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
