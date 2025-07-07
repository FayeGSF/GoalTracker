import { Routes, Route, Link } from 'react-router-dom';

import React, {useState,  useEffect} from 'react';
import GoalForm from './Components/GoalForm';
import GoalList from './Components/GoalList';
import Header from './Components/Header';
import ContributionPage from './Components/ContributionPage';
import GoalProgressPage from './Components/GoalProgress';
import FinancialNews from './Components/FinancialNews'; 


function App() {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");
    try {
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
        }
      });

    useEffect(() => {
      localStorage.setItem("goals", JSON.stringify(goals));
    }, [goals]);
  
    const[contributions, setContributions] = useState (()=> {
      const savedContributions = localStorage.getItem("contributions")
      try {
        const parsedContributions = savedContributions ? JSON.parse(savedContributions) : []
        return Array.isArray(parsedContributions) ? parsedContributions : []
      } catch {
        return []
      }
      })
      useEffect(() => {
        localStorage.setItem('contributions', JSON.stringify(contributions));
        }, [contributions]);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FinancialNews />} />
        <Route path="/setgoal" element={<GoalForm goals={goals} setGoals={setGoals} />} />
        <Route
          path="/contribution"
          element={
          <ContributionPage 
          contributions={contributions} 
          setContributions={setContributions}
          goals={goals}/>
          }
        />
        <Route path="/goals" element={<GoalList goals={goals} setGoals={setGoals} />} />
        <Route path="/progress"element={<GoalProgressPage goals={goals} contributions={contributions} />}
/>
      </Routes>
    </>
  );
}

export default App;
