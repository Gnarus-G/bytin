import { IsNotEmpty } from "class-validator";
import {
    SnippetCreateWithoutOwnerInput
} from "generated/graphql";
import { useRef } from "react";
import { useValidation } from "react-class-validator";

class SnippetInput implements SnippetCreateWithoutOwnerInput {
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

export default function useSnippetInput(
  initialSnippet?: SnippetCreateWithoutOwnerInput
) {
  const newInput = initialSnippet
    ? Object.assign(new SnippetInput(), initialSnippet)
    : new SnippetInput();

  const { current: input } = useRef(newInput);
  const [validate, errors] = useValidation(SnippetInput);

  return { snippet: input, validate, errors };
}
