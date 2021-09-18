import { Check, Save } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { IsNotEmpty } from "class-validator";
import { AuthGuard } from "components/auth-guard";
import SnippetForm from "components/snippet/form";
import { onChange } from "components/utils/forms/onChange";
import {
  SnippetCreateInput,
  useCreateSnippetMutation,
} from "generated/graphql";
import { useSession } from "next-auth/client";
import React, { useRef } from "react";
import { useValidation } from "react-class-validator";

class SnippetInput implements SnippetCreateInput {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  language: string;
  @IsNotEmpty()
  code: string;
  @IsNotEmpty()
  description: string;
  framework?: string;
  resource?: string;
  private?: boolean;
}

export default function AddSnippet() {
  const { current: input } = useRef(new SnippetInput());
  const [validate, errors] = useValidation(SnippetInput);
  const [session] = useSession();
  const [{ data }, createSnippet] = useCreateSnippetMutation();

  const success = !!data?.createSnippet?.id;

  return (
    <Container maxWidth="sm">
      <AuthGuard>
        <Typography variant="h4" align="center" paragraph>
          Add a Snippet
        </Typography>
        <SnippetForm
          id={SnippetForm.name}
          errors={errors}
          onChange={onChange(input)}
          onSubmit={async () => {
            if (await validate(input))
              await createSnippet({
                data: {
                  ...input,
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
