import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './components/context/notes/NoteState';
import { Singup } from './components/Singup';
import { Login } from './components/Login';
import Alert from './components/Alert'
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

function App() {
  
  const [progress, setProgress] = useState(0)
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
     msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  return (
    <div>
      <NoteState>
        <Router>
        <LoadingBar
        color='blue'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <Header />
          <Alert alert={alert}/>
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert} setProgress={setProgress}/>}>
            </Route>
            <Route exact path='/about' element={<About setProgress={setProgress}/>}>
            </Route>
            <Route exact path='/login' element={<Login showAlert={showAlert} setProgress={setProgress}/>}>
            </Route>
            <Route exact path='/singup' element={<Singup showAlert={showAlert} setProgress={setProgress}/>}>
            </Route>
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
