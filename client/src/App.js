
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import {useState} from "react"
import Main from './views/Main';
import Form from './components/Form';
import Result from './views/Result';
import LogReg from './views/LogReg';
import PastForm from './components/PastForm';
import UpdateForm from './components/UpdateForm';
import Calender from './views/CalenderPage';

function App() {
  const [userstate, setUserstate] = useState({})

  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       
     <Route exact path="/">
        <LogReg />
       </Route>

       <Route exact path="/dashboard">
        <Main userstate={userstate} setUserstate={setUserstate}/>
       </Route>

       <Route exact path="/form/:user_id">
        <Form userstate={userstate} setUserstate={setUserstate}/>
       </Route>

       <Route exact path="/result/:id">
        <Result />
       </Route>

       <Route exact path="/pastforms">
        <PastForm userstate={userstate} />
       </Route>

       <Route exact path="/update/:id">
        <UpdateForm userstate={userstate}/>
       </Route>
       
       <Route exact path="/calendar">
        <Calender userstate={userstate}/>
       </Route>

     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
