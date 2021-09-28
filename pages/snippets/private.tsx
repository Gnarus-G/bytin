import { Container } from "@mui/material";
import { AuthGuard } from "components/auth-guard";
import SnippetGrid from "components/snippet/grid";
import PrivateActions from "components/snippet/privateActions";
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
      <Container maxWidth="xl">
        <SnippetGrid
          snippets={data?.snippets}
          aboveEach={(snippet) => <PrivateActions snippet={snippet} />}
        />
      </Container>
    </AuthGuard>
  );
}
