import { onChange } from "components/utils/forms/onChange";
import {
  Snippet,
  SnippetCreateWithoutOwnerInput,
  SnippetFragment,
  useUpdateSnippetMutation,
} from "generated/graphql";
import React from "react";
import SnippetForm from "./form";
import useSnippetInput from "./useSnippetInput";

export default function EditSnippet({
  //destructuring owner and __typename to remove them from the snippet
  //and pass api validation
  snippet: { owner, __typename, id, ...snippet },
  formId,
  onSuccess,
}: {
  formId: string;
  snippet: SnippetFragment;
  onSuccess: () => void;
}) {
  const { snippet: editedSnippet, validate, errors } = useSnippetInput(snippet);
  const [, updateSnippet] = useUpdateSnippetMutation();
  return (
    <div>
      <SnippetForm
        id={formId}
        defaultValue={snippet as Snippet}
        errors={errors}
        onChange={onChange(editedSnippet)}
        onSubmit={async () => {
          if (await validate(editedSnippet))
            await updateSnippet({
              where: { id },
              data: settingEachField(editedSnippet),
            }).then(onSuccess);
        }}
      />
    </div>
  );
}

/**
 * Because prisma's update data argument wants new values
 * applied a nested 'set' property of each of the data's
 * fields.
 * @param snippet
 * @returns
 */
function settingEachField({ ...snippet }: SnippetCreateWithoutOwnerInput) {
  return Object.entries(snippet).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        set: value,
      },
    }),
    {}
  );
}
