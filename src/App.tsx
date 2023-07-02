import { useRef, useState } from 'react';
import './App.css';
import Dialog from './components/Dialog';
import UseTransition from './components/UseTransition';
import { DialogContext } from './utils/DialogContext';
import MainPage from './pages/MainPage';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const dialogText = useRef<string>('');
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const setDialog = (text: string, isShow: boolean) => {
    setDialogShow(isShow);
    dialogText.current = text;
  }
  return (
    <DialogContext.Provider value={{setDialog}}>
      <Dialog text={dialogText.current} isShow={dialogShow}/>
      <div className="App">
        <BrowserRouter>
          <MainPage/>
        </BrowserRouter>
      </div>
    </DialogContext.Provider>
  )
}

export default App
