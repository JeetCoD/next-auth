"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";

export default function page() {
  function handleSignIn(e: any) {
    e.preventDefault();
    signIn("credentials", {
      username: e.target.username.value,
      password: e.target.password.value,
      callbackUrl: "/",
      redirect: true,
    });
  }

  return (
    <div className="flex justify-center items-center h-dvh">
      <Card className="p-4">
        <CardTitle>Sign in to Localhost</CardTitle>
        <CardContent>
          <form
            method="post"
            action="/api/auth/callback/credentials"
            className="flex flex-col gap-4"
            onSubmit={handleSignIn}
          >
            <Label htmlFor="email">Enter email</Label>
            <Input
              type="text"
              id="email"
              name="username"
              placeholder="Enter email"
            />
            <Label htmlFor="password">Enter Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
            <Button type="submit" variant={"outline"}>
              Sign In
            </Button>
          </form>
          <Separator />
          <Button
            variant={"outline"}
            className="mt-4"
            onClick={() => signIn("google")}
          >
            Sign In with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
