import getPredictedCompletionDate from './PredictedDate'
import ProgressBar from "./ProgressBar"


function GoalProgress({ goals = [], contributions = [] }) {
  if (!goals.length) return <p>No goals found!</p>;

  

   return (
    <div className="goal-progress-container">
      <h2 className='goal-progress-title'>Goal Progress</h2>
      {goals.map((goal) => {
        const goalContributions = contributions
          .filter((c) => c.goalId === goal.id)
        const totalContributed = goalContributions
          .reduce((sum, c) => sum + c.contributionAmount, 0);
        const { predictedDate, daysRemaining } = getPredictedCompletionDate(goal, contributions);
        return (
          <div className='goal-progress-item' key={goal.id} style={{ marginBottom: "24px" }}>
            <h4>{goal.name}</h4>
            <div className='progress-bar-container'>
              < ProgressBar value={totalContributed} max={goal.amount} predictedDate ={predictedDate}/>
            </div>
             {predictedDate && (
              <p className="predicted-date">
                  Predicted Completion Date: <strong>{predictedDate}</strong> <br />
                  <p>
                  Days to Goal: <strong>{daysRemaining} days</strong>
                  </p>
              </p>
              )}
              {}
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