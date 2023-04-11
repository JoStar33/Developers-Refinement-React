import { createContext } from "react";

export const DialogContext = createContext({
  setDialog: (dialogText: string, isShow: boolean) => {}
});