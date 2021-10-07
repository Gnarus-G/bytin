import { Check, Save } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { AuthGuard } from "components/auth-guard";
import SnippetForm from "components/snippet/form";
import useSnippetInput from "components/snippet/useSnippetInput";
import { onChange } from "components/utils/forms/onChange";
import { useCreateSnippetMutation } from "generated/graphql";
import { useSession } from "next-auth/client";
import React from "react";

export default function AddSnippet() {
  const { snippet, validate, errors } = useSnippetInput();
  const [session] = useSession();
  const [{ data }, createSnippet] = useCreateSnippetMutation();

  const success = !!data?.createSnippet?.id;

  return (
    <Container maxWidth="sm">
      <AuthGuard>
        <Typography variant="h4" py={2} align="center" paragraph>
          Add a Snippet
        </Typography>
        <SnippetForm
          id={SnippetForm.name}
          errors={errors}
          onChange={onChange(snippet)}
          onSubmit={async () => {
            if (await validate(snippet))
              await createSnippet({
                data: {
                  ...snippet,
                  owner: {
                    connect: {
                      email: session?.user?.email,
                    },
                  },
                },
              });
          }}
        />
        <Button
          style={{ float: "right" }}
          variant="contained"
          color={success ? "success" : "primary"}
          type="submit"
          form={SnippetForm.name}
          startIcon={success ? <Check /> : <Save />}
        >
          {success ? "Saved" : "Save"}
        </Button>
      </AuthGuard>
    </Container>
  );
}
