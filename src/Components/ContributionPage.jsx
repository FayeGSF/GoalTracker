import React from 'react';
import ContributionForm from './ContributionForm';
import ContributionList from './ContributionList';

function ContributionPage({ contributions, setContributions, goals }) {
  return (
    <div>
      <h2>Contribution Tracker</h2>
      <ContributionForm
        contributions={contributions}
        setContributions={setContributions}
        goals ={goals}
      />
      <hr />
      <ContributionList contributions={contributions} goals={goals} />
    </div>
  );
}

export default ContributionPage;
