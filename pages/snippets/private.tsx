import { AuthGuard } from "components/auth-guard";
import SnippetGrid from "components/snippet/grid";
import { useOwnSnippetsQuery } from "generated/graphql";
import { useSession } from "next-auth/client";
import React from "react";

export default function PublicSnippets() {
  const [session] = useSession();
  const [{ data }] = useOwnSnippetsQuery({
    variables: {
      where: {
        owner: {
          is: { email: { equals: session?.user.email } },
        },
      },
    },
  });

  return (
    <AuthGuard>
      <SnippetGrid snippets={data?.snippets} />
    </AuthGuard>
  );
}
