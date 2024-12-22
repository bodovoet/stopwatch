import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/public/Home");
  }, [router]);

  return null; // No content is rendered, as the page redirects immediately
}