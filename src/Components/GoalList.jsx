

function GoalList ({goals=[], setGoals}){
    console.log("GoalList received goals:", goals);
    console.log("Is Array?", Array.isArray(goals));
    console.log("Length:", goals.length);


    if (!Array.isArray(goals) || goals.length === 0) 
        return <p>No goals saved yet</p>
    

    function deleteGoal(id) {
        const updatedGoals = goals.filter(goal => goal.id !==id)
        setGoals(updatedGoals)

    }
    return ( <>
    <div className="goal-list-container">
        <h2 className="goal-list-title" style={{ color: "#2e4e88"}}>Goals List</h2>
        <ol className="goal-list-items">{goals.map((goal) => (
            <li className="goal-list-item" key={goal.id}>{goal.name} : ${goal.amount.toFixed(2)}
            <button className="delete-goal-button" onClick={()=> deleteGoal(goal.id)}>Delete</button></li>
            ))}
            

        </ol>
       
    </div>
    
    
    </>) 

}

export default GoalList