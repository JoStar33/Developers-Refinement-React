import { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialog from "./components/Dialog";
// import CompoundPage from './pages/compoundComponents/CompoundPage';
// import TabPage from './pages/compoundComponents/TabPage';
import { DialogContext } from "./utils/DialogContext";
import AbortPage from "./pages/AbortPage";
import BroadCast from "./components/BroadCast";
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
        <BrowserRouter>
          {/* <MainPage/> */}
          <BroadCast />
          {/* <CompoundPage/> */}
        </BrowserRouter>
      </div>
    </DialogContext.Provider>
  );
};

export default App;
