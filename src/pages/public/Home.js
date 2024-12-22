import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/protected/Dashboard"); // Redirect signed-in users
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold">Welcome to the Stopwatch App</h1>
      <p className="text-lg mt-4">
        Get started by <a href="/sign-in" className="text-blue-500 underline">signing in</a>.
      </p>
    </div>
  );
}