import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

export function AuthGuard({ children }: { children: ReactNode }) {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    const isNotAllowed = !loading && !session;
    if (isNotAllowed) router.push("/api/auth/signin");
  }, [loading, router, session]);

  if (loading) return <h1>Loading...</h1>;

  const isAllowed = !loading && session;

  if (isAllowed) return <>{children}</>;

  return null;
}
