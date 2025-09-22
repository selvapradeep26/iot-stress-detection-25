import { useState } from 'react'
import LevelCard from '../Components/Stresscard'
import Navbar from '../Components/Navbar';
import UserCard from '../Components/User';
import './App.css'

function App() {
  const [stressLevel, setStressLevel] = useState("Medium");
  const [stressPercentage, setStressPercetage] = useState(90);

  const[userName,setUserName] = useState('');

  const handleNameChange = (event) =>{
    setUserName(event.target.value);
  }
  const userData = {
    name: "Selva Pradeep E",
    email: "ABC@gmail.com",
    occupation: "Software Develeoper",
    lastlogin: "2 hours ago"
  }


  return(
    <div className = 'App'>
      <div className="Nav">
        <Navbar></Navbar>
      </div>
      <header className = "App-header">
        <div className = "Text-al">
          <h1>Stress Level Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="main-flex">
          <div className="CD1">
            <LevelCard
              title='Current Stress'
              level={stressLevel}
              percentage={stressPercentage}
            />
          </div>
          <div className='User'>
            <UserCard user={userData} />
          </div>
        </div>
      </main>
      </div>
    
  );
}

export default App
