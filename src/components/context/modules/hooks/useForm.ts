import { type ChangeEvent, useState } from 'react';
import { FormFieldAttributes } from '../interfaces';

type OnChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const DAY = 'Day';

export function useFormField<T extends Record<string, string | number>, K extends keyof T>(initialForm: T) {
  const [form, setForm] = useState(initialForm);

  const onChange = (event: OnChangeEvent) => {
    const { name, value } = event.target;
    if (typeof value === 'undefined') return;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const resetForm = () => setForm(initialForm);

  const attributes = Object.keys(form).reduce((accumulatedAttributes, key) => {
    const selectedOrValue = key.endsWith(DAY) ? 'selected' : 'value';
    return {
      ...accumulatedAttributes,
      [key]: {
        name: key,
        [selectedOrValue]: form[key],
        onChange,
      },
    };
  }, {} as FormFieldAttributes<K>);

  return { form, setForm, resetForm, attributes };
}
