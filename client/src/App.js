import './App.css';
import StudentLogin from './Login/StudentLogin';
import {useEffect, useState} from 'react'
import StudentLogout from './Logout/StudentLogout';

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
        <StudentLogin />
        <StudentLogout handleLogout={handleLogout}/>
      </header>
    </div>
  );
}

export default App;
