import { createContext, useContext } from 'react';
import { Nullable, FormContextType } from '../interfaces';

export const createFormContext = createContext<Nullable<FormContextType>>(null);

export const FormProvider = createFormContext.Provider;

export const useFormContext = <T extends Record<string, string | number>>() => {
  const context = useContext(createFormContext);

  if (!context) {
    throw Error('useFormContext must be in FormProvider');
  }

  return context as unknown as FormContextType<T>;
};
