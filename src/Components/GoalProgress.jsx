import getPredictedCompletionDate from './PredictedDate'
import ProgressBar from "./ProgressBar"


function GoalProgress({ goals = [], contributions = [] }) {
  if (!goals.length) return <p>No goals found!</p>;

  

   return (
    <div>
      <h2>Goal Progress</h2>
      {goals.map((goal) => {
        const goalContributions = contributions
          .filter((c) => c.goalId === goal.id)
        const totalContributed = goalContributions
          .reduce((sum, c) => sum + c.contributionAmount, 0);
        const predictedDate = getPredictedCompletionDate(goal, contributions);
        return (
          <div key={goal.id} style={{ marginBottom: "24px" }}>
            <h4>{goal.name}</h4>
            <ProgressBar value={totalContributed} max={goal.amount} predictedDate ={predictedDate}/>
            <p>
              ${totalContributed.toFixed(2)} of ${goal.amount.toFixed(2)} saved
            </p>
          </div>
        );
      })}
    </div>
  );
}


export default GoalProgress