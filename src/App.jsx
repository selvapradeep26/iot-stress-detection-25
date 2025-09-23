import { useState } from 'react'
import LevelCard from '../Components/Stresscard'
import Navbar from '../Components/Navbar';
import UserCard from '../Components/User';
import StressHistory from '../Components/Stresshistory';
import './App.css'

const stressData = [
  { date: '2025-09-18', stress: 60 },
  { date: '2025-09-19', stress: 75 },
  { date: '2025-09-20', stress: 90 },
  { date: '2025-09-21', stress: 80 },
  { date: '2025-09-22', stress: 70 },
];

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
        <div style={{ marginTop: '2rem', width: '100%' }}>
          <StressHistory data={stressData} />
        </div>
      </main>
    </div>
  );
}

export default App
