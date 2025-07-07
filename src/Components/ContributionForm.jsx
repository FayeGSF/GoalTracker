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
    <div>
      <h2>Contribution</h2>
      <input
        type="text"
        value={contributionName}
        onChange={(e) => setContributionName(e.target.value)}
        placeholder="Enter Contribution Name"
      />
      $<input
        type="number"
        value={contributionAmount}
        onChange={(e) => setContributionAmount(e.target.value)}
        placeholder="Enter Contribution Amount"
      />
      <div>
        <label>Select Goal: </label>
        <select value={selectedGoalId} onChange={(e) => setSelectedGoalId(e.target.value)}>
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
      <div className="goal-submit">
        <button type="submit" onClick={storeContribution}>
          Save Contribution!
        </button>
      </div>
    </div>
  );
}



export default ContributionForm