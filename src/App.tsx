import { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialog from "./components/Dialog";
// import CompoundPage from './pages/compoundComponents/CompoundPage';
// import TabPage from './pages/compoundComponents/TabPage';
import { DialogContext } from "./utils/DialogContext";
import AbortPage from "./pages/AbortPage";
import BroadCast from "./components/BroadCast";
import UseDeferredValue from "./components/react18/UseDeferredValue";
import Key from "./components/Key";
import { store } from "./reduxStores";
import { Provider } from "react-redux";
import Counter from "./components/redux/Counter";
import KeyDuplication from "./components/KeyDuplication";

//다음과 같이 채널을 형성
const channel = new BroadcastChannel("my_bus");

export { channel };

const App = () => {
  const dialogText = useRef<string>("");
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const setDialog = (text: string, isShow: boolean) => {
    setDialogShow(isShow);
    dialogText.current = text;
  };
  return (
    <DialogContext.Provider value={{ setDialog }}>
      <Dialog text={dialogText.current} isShow={dialogShow} />
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <KeyDuplication />
          </BrowserRouter>
        </Provider>
      </div>
    </DialogContext.Provider>
  );
};

export default App;
