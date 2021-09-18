import { Dispatch, SetStateAction } from "react";

export type FormInputChangeFn = (event: any) => void;

export function onChange<T extends object>(input: T): FormInputChangeFn;
export function onChange<T extends object>([data, setData]: [
  T,
  Dispatch<SetStateAction<T>>
]): FormInputChangeFn;
export function onChange(arg: object | [object, () => void]) {
  if (Array.isArray(arg)) return onStateChange(arg);
  return onPropertyChange(arg);
}

const onPropertyChange =
  (input: any): FormInputChangeFn =>
  (event) => {
    const { name, value } = event.target;
    input[name] = value;
  };

const onStateChange =
  <T extends object>([data, setData]: [
    T,
    Dispatch<SetStateAction<T>>
  ]): FormInputChangeFn =>
  ({ target }: any) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };
