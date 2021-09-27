import { Grid } from "@mui/material";
import { AuthGuard } from "components/auth-guard";
import SnippetCard from "components/snippet/card";
import PrivateActions from "components/snippet/privateActions";
import {
  useOwnSnippetsQuery
} from "generated/graphql";
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
      <Grid container p={3} spacing={3}>
        {data?.snippets.map((snippet) => (
          <Grid key={snippet.id} item xs={12} sm={6} md={4} lg={3}>
            <PrivateActions snippet={snippet} />
            <SnippetCard snippet={snippet} raised />
          </Grid>
        ))}
      </Grid>
    </AuthGuard>
  );
}
