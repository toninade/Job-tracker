"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { signUp } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setLoading(true);

    try {
      const result = await signUp.email({ email, password, name });
      if (result.error) {
        setError(String(result.error));
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Failed to Sign up");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-sm mx-auto mt-5 ">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your name , email to sign up new account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="rounded-md bg-destructive/30 p-3 text-sm text-destructive mb-3">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Name</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                ></a>
              </div>
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name"
                type="text"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                minLength={8}
              />
            </div>
          </div>
          <Button type="submit" className="w-full mt-5" disabled={loading}>
            {loading ? "Creating account ..." : "Submit"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-1">
        <div className="text-gray-600">
          You already have account?{" "}
          <Link className="hover:underline font-medium pl-2 " href="/sign-in">
            Log in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
