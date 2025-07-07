

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
    <div>
        <h2>Goals List</h2>
        <ol>{goals.map((goal) => (
            <li key={goal.id}>{goal.name} : ${goal.amount.toFixed(2)}
            <button id="delete-goal" onClick={()=> deleteGoal(goal.id)}>Delete</button></li>
            ))}
            

        </ol>
       
    </div>
    
    
    </>) 

}

export default GoalList