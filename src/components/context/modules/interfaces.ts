import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export type Nullable<T> = T | null;

type OnChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const DAY = 'Day';

export type DefaultFormType = {
  [key in string]: string | number;
};

export type FormFieldAttributes<K> = {
  [key in K & string]: {
    name: K;
    onChange: (event: OnChangeEvent) => void;
    disabled?: boolean;
    label?: string;
  } & (key extends `${string}${typeof DAY}` ? { selected: string } : { value: string });
};

export interface FormContextType<T = any> {
  form: T;
  setForm: Dispatch<SetStateAction<T>>;
  resetForm: () => void;
  attributes: FormFieldAttributes<keyof T>;
}
