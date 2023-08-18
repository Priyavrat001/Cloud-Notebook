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

function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />}>
            </Route>
            <Route exact path='/about' element={<About />}>
            </Route>
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
