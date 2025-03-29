import styled from 'styled-components';
import { useFormContext } from '../../contexts/FormContext';

interface FormInputProps<T> {
  name: keyof T;
}

export default function FormInput<T extends Record<string, string | number>>({ name }: FormInputProps<T>) {
  const { form, attributes } = useFormContext<T>();

  return (
    <S.FormInput>
      <span className="form-input__label">{attributes[name].label}</span>
      <input className="form-input__input" name={String(name)} onChange={attributes[name].onChange} value={form[name]} />
    </S.FormInput>
  );
}

const S = {
  FormInput: styled.label`
    display: flex;
    gap: 1rem;
    .form-input {
      &__label {
      }
    }
  `,
};
