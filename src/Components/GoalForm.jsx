import React, {useState} from "react";

function GoalForm({goals =[], setGoals}) {

    const [name, setName] = useState ("")
    const[amount, setAmount] = useState("")


    function handleGoal(e) {
        setName (e.target.value)
    }

    function handleAmount (e) {
        setAmount (e.target.value)
    }
    function storeGoal () {
        if (!amount || !name) {
            alert ('Enter a valid goal name and amount')
            return
        }
        // save goal in array 
        const newGoal ={id: Date.now(), name, amount:parseFloat(amount)}
        // get existing goals array or start empyu
    
        const updatedGoals = [...goals, newGoal];

        setGoals(updatedGoals); // Update state in App (and localStorage via App's useEffect)
        setName("");
        setAmount("");
        alert ('Goal Saved!')
        console.log (updatedGoals)
        

    }

    return (
        <div className="goal-form-container">
          <h2 className="goal-form-title" style={{ color: "#2e4e88"}}>Enter your goal below!</h2>
          <h4 className="goal-form-label">Goal Name:</h4>
          <input
            className="goal-form-input"
            type="text"
            placeholder="Goal Name (eg. Laptop)"
            value={name}
            onChange={handleGoal}
          />
          <h4 className="goal-form-label">Amount ($):</h4>
          <input
            className="goal-form-input"
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={handleAmount}
          />
          <div className="goal-submit">
            <button type="submit" onClick={storeGoal}>Save Goal!</button>
          </div>
        </div>
      );
}

export default GoalForm