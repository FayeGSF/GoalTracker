import React, { useState } from "react";

function ContributionForm({ contributions = [], setContributions, goals = [] }) {
  const [contributionName, setContributionName] = useState("");
  const [contributionAmount, setContributionAmount] = useState("");
  const [selectedGoalId, setSelectedGoalId] = useState("");

  function storeContribution() {
    if (!contributionName || !contributionAmount || !selectedGoalId) {
      alert("Please enter all fields and select a goal.");
      return;
    }

    const newContribution = {
      id: Date.now(),
      contributionName,
      contributionAmount: parseFloat(contributionAmount),
      goalId: Number(selectedGoalId),
      date: new Date().toLocaleDateString(),
    };
    console.log("Saving contribution:", newContribution);

    const updatedContribution = [...contributions, newContribution];
    setContributions(updatedContribution);
    setContributionName("");
    setContributionAmount("");
    setSelectedGoalId(goals[0]?.id || "");
    alert("Thank you for your contribution!");
  }

  return (
    <div className="contribution-form-container">
      <h2 style={{color: "#2e4e88"} }>Make a Contribution</h2>
      <div>
        <label>Select Goal: </label><br />
        <select className="contribution-form-select" value={selectedGoalId} onChange={(e) => setSelectedGoalId(e.target.value)}>
            <option value="" disabled>
                -- Select a Goal --
            </option>
            {goals.map((goal) => (
            <option key={goal.id} value={goal.id}>
              {goal.name}
            </option>
          ))}
        </select>
      </div>
      <label>Contribution Amount ($):  </label> <br />
      <input className="contribution-form-amount"
        type="number"
        value={contributionAmount}
        onChange={(e) => setContributionAmount(e.target.value)}
        placeholder="Enter Contribution Amount"
      /> <br />
      <label>Contribution Description: </label> <br />
      <input className="contribution-form-input"
        type="text"
        value={contributionName}
        onChange={(e) => setContributionName(e.target.value)}
        placeholder="Enter Description"
      />
      <div className="goal-submit">
        <button type="submit" onClick={storeContribution}>
          Save Contribution!
        </button>
      </div>
    </div>
  );
}



export default ContributionForm