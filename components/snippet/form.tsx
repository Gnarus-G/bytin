import {
  Code,
  Description,
  Link as LinkIcon,
  Storage as StorageIcon,
  Title,
  Translate,
} from "@mui/icons-material";
import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import { FormInputChangeFn } from "components/utils/forms/onChange";
import { SnippetCreateInput } from "generated/graphql";
import React, { FormEvent } from "react";

type SnippetInput = Omit<
  SnippetCreateInput,
  "owner" | "createdAt" | "updatedAt"
>;

interface SnippetFormProps {
  id?: string;
  errors: ValidationErrorMap<SnippetInput, keyof SnippetInput>;
  onChange: FormInputChangeFn;
  onSubmit: () => void;
}

export default function SnippetForm({
  id,
  errors,
  onChange,
  onSubmit,
}: SnippetFormProps) {
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
