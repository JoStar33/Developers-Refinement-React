import FormInput from './modules/components/forms/FormInput';
import { FormProvider } from './modules/contexts/FormContext';
import { useFormField } from './modules/hooks/useForm';

export default function Context() {
  const formState = useFormField({
    test: '',
    name: '',
  });

  return (
    <FormProvider value={formState}>
      {formState.form.test}
      <FormInput name="test" />
    </FormProvider>
  );
}
