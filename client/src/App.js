import './App.css';
import {useEffect, useState} from 'react'
import { Switch, Route } from 'react-router';
import StudentLogin from './Login/StudentLogin';
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import TutoringPage from './BookTutoring/TutoringPage';
import LearnPage from './Learn/LearnPage';
import SocialMediaPage from './Social Media/SocialMediaPage';
import StudentSignUp from './Login/StudentSignUp,';
import UpdateStudent from './Login/UpdateStudent';
import LearnPageResources from './Learn/LearnPageResources';


function App() {
  const [currentStudent, setCurrentStudent] = useState(false)
  useEffect(()=> {
    fetch("/current_student")
    .then(r => {
      if (r.ok) {
        r.json().then(currentStudent => {
          console.log("logged in: ", currentStudent)
          setCurrentStudent(currentStudent)
        },[])
      } else {
        console.log("No user is logged in")
      }
    })
  },[])

  function handleLogin(currentStudent){
    setCurrentStudent(currentStudent)
  }
  function handleLogout(){
    setCurrentStudent(false)
  }


  return (
    <div className="App">
      <header className="App-header">
        <NavBar handleLogout={handleLogout} currentStudent={currentStudent} />
        <Switch> 
        <Route exact path= "/login">
          <StudentLogin handleLogin={handleLogin} currentStudent={currentStudent}/>
        </Route>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route exact path = "/tutoring">
          <TutoringPage currentStudent={currentStudent}/>
        </Route>
        <Route exact path = "/adminlearn">
          <LearnPageResources />
        </Route>
        <Route exact path = "/social">
          <SocialMediaPage /> 
        </Route>
        <Route exact path = "/signup">
          <StudentSignUp handleLogin={handleLogin} currentStudent={currentStudent} />
        </Route>
        <Route exact path = "/update">
          <UpdateStudent currentStudent={currentStudent} />
        </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
