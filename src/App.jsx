import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelCard from '../Components/Stresscard'
import Navbar from '../Components/Navbar';
import UserCard from '../Components/User';
import StressHistory from '../Components/Stresshistory';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import './App.css'

const stressData = [
  { date: '2025-09-18', stress: 60 },
  { date: '2025-09-19', stress: 75 },
  { date: '2025-09-20', stress: 90 },
  { date: '2025-09-21', stress: 80 },
  { date: '2025-09-22', stress: 70 },
];

function Dashboard({ user }) {
  const [stressLevel] = useState("Medium");
  const [stressPercentage] = useState(90);
  return (
    <>
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
            <UserCard user={user} />
          </div>
        </div>
        <div style={{ marginTop: '2rem', width: '100%' }}>
          <StressHistory data={stressData} />
        </div>
      </main>
    </>
  );
}

function App() {
  const [user, setUser] = useState({
    name: "Selva Pradeep E",
    email: "ABC@gmail.com",
    occupation: "Software Developer",
    lastLogin: "2 hours ago"
  });

  return(
    <Router>
      <div className = 'App'>
        <div className="Nav">
          <Navbar />
        </div>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/" element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
