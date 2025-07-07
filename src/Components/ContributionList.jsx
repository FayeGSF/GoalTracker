function ContributionList({ contributions = [] , goals=[]}) {
  if (!Array.isArray(contributions) || contributions.length === 0) {
    return <p style={{textAlign: "center"}}><i>No contributions made yet!</i></p>;
    
  }
  
  return (
    <div className="contribution-list-container">
      <h3 className="contribution-list-title">Your Contributions</h3>
      <table className="contribution-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Amount ($)</th>
            <th>Goal</th>
          </tr>
        </thead>
         <tbody>
          {contributions.map((contribution) => {
            const matchedGoal = goals.find(goal => goal.id === Number(contribution.goalId));
              console.log("Contribution:", contribution);
              console.log("Matched Goal:", matchedGoal);
            return (
              <tr key={contribution.id} className="contribution-table-row">
                <td>{contribution.date}</td>
                <td>{contribution.contributionName}</td>
                <td>{contribution.contributionAmount.toFixed(2)}</td>
                <td>{matchedGoal ? matchedGoal.name : "Unknown Goal"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ContributionList; //



    