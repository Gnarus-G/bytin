import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useLayoutEffect } from "react";

interface WithFallBackProps {
  when: boolean;
  fallback?: JSX.Element;
}

export function WithFallBack(props: PropsWithChildren<WithFallBackProps>) {
  if (props.when) return props.fallback || null;
  return <>{props.children}</>;
}

interface RedirectProps {
  to: string;
  meanWhile?: JSX.Element;
}

export function Redirect({ to, meanWhile }: RedirectProps) {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push(to);
  }, [router, to]);
  return meanWhile || null;
}
