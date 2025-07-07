function getPredictedCompletionDate(goal, contributions) {
  // Filter contributions related to this goal
  const goalContributions = contributions.filter(c => String(c.goalId) === String(goal.id));
  if (goalContributions.length === 0) {
    return "No contributions yet";
  }

  // Sum of contributions
  const totalContributed = goalContributions.reduce((sum, c) => sum + c.contributionAmount, 0);

  // Calculate how much left
  const remainingAmount = goal.amount - totalContributed;
  if (remainingAmount <= 0) {
    return "Goal completed!";
  }

  // Calculate days since first contribution
  const firstDate = new Date(goalContributions.reduce((earliest, c) => {
    const cDate = new Date(c.date);
    return cDate < earliest ? cDate : earliest;
  }, new Date()));

  const today = new Date();
  const diffTime = Math.abs(today - firstDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Average daily contribution
  const averageDailyContribution = totalContributed / diffDays;

  if (averageDailyContribution === 0) {
    return "Insufficient data";
  }

  // Calculate days left
  const daysLeft = remainingAmount / averageDailyContribution;

  // Predict completion date
  const predictedDate = new Date(today);
  predictedDate.setDate(today.getDate());

  const daysRemaining = Math.ceil(daysLeft)

  return {
    predictedDate: predictedDate.toLocaleDateString("en-GB").replace(/\//g, '-'),
    daysRemaining: daysRemaining
  };
}

export default getPredictedCompletionDate