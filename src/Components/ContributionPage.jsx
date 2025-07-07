import React from 'react';
import ContributionForm from './ContributionForm';
import ContributionList from './ContributionList';

function ContributionPage({ contributions, setContributions, goals }) {
  return (
    <div className="contribution-page-container">
      <h2 className="contribution-page-title" style={{ color: "#2e4e88"}}>Contribution Tracker</h2>
      <div className="contribution-form-container">
      <ContributionForm
        contributions={contributions}
        setContributions={setContributions}
        goals ={goals}
      />
      </div>
      <hr />
      <div className="contribution-list-container">
      <ContributionList contributions={contributions} goals={goals} />
    </div>
    </div>
  );
}

export default ContributionPage;
