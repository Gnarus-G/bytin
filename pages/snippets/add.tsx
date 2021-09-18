import {
  Check,
  Code,
  Description,
  Link as LinkIcon,
  Save,
  Storage as StorageIcon,
  Title,
  Translate,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { IsNotEmpty } from "class-validator";
import { FormInputChangeFn, onChange } from "components/utils/forms/onChange";
import {
  SnippetCreateInput,
  useCreateSnippetMutation,
} from "generated/graphql";
import { useSession } from "next-auth/client";
import React, { FormEvent, useRef } from "react";
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

  console.log(`success`, success);

  return (
    <Container maxWidth="sm">
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
    </Container>
  );
}

interface SnippetFormProps {
  id?: string;
  errors: ValidationErrorMap<SnippetInput, keyof SnippetInput>;
  onChange: FormInputChangeFn;
  onSubmit: () => void;
}

function SnippetForm({ id, errors, onChange, onSubmit }: SnippetFormProps) {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      component="form"
      id={id}
      aria-label="signup-form"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Grid item>
        <TextField
          label="Title"
          fullWidth
          InputProps={{ startAdornment: <Title /> }}
          name="title"
          onChange={onChange}
          error={Boolean(errors.title)}
          helperText={errors.title}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Language"
          fullWidth
          InputProps={{ startAdornment: <Translate /> }}
          name="language"
          onChange={onChange}
          error={Boolean(errors.language)}
          helperText={errors.language}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Framework"
          fullWidth
          InputProps={{ startAdornment: <StorageIcon /> }}
          name="framework"
          onChange={onChange}
          error={Boolean(errors.framework)}
          helperText={errors.framework}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Code"
          fullWidth
          multiline
          minRows={10}
          InputProps={{
            startAdornment: <Code />,
            style: { alignItems: "flex-start" },
          }}
          name="code"
          onChange={onChange}
          error={Boolean(errors.code)}
          helperText={errors.code}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Description"
          fullWidth
          InputProps={{ startAdornment: <Description /> }}
          name="description"
          onChange={onChange}
          error={Boolean(errors.description)}
          helperText={errors.description}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Resource"
          fullWidth
          InputProps={{ startAdornment: <LinkIcon /> }}
          name="resource"
          onChange={onChange}
          error={Boolean(errors.resource)}
          helperText={errors.resource}
        />
      </Grid>
      <Grid item mx={4}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(_, checked) =>
                onChange({
                  target: {
                    name: "private",
                    value: checked,
                  },
                })
              }
            />
          }
          label="Private"
        />
      </Grid>
      <input hidden type="submit" />
    </Grid>
  );
}
